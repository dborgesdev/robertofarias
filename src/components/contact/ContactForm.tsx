import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import {
  contactEmail,
  whatsappLink,
  type ContactContext,
} from "../../data/contact";
import {
  contactLimits,
  validateContact,
  type ContactErrors,
  type ContactValues,
} from "../../lib/contactValidation";
import { formatWhatsAppMessage } from "../../lib/formatWhatsAppMessage";
import WhatsAppIcon from "../ui/WhatsAppIcon";

type Feedback = {
  type: "error" | "success" | "whatsapp";
  message: string;
  href?: string;
} | null;
export default function ContactForm({
  context = "general",
}: {
  context?: ContactContext;
}) {
  const id = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const startedAt = useRef(0);
  const controller = useRef<AbortController | null>(null);
  const submission = useRef<{ signature: string; id: string } | null>(null);
  const [values, setValues] = useState<ContactValues>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<ContactErrors>({});
  const [feedback, setFeedback] = useState<Feedback>(null);
  const [sending, setSending] = useState(false);
  useEffect(() => {
    startedAt.current = Date.now();
    return () => controller.current?.abort();
  }, []);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (sending) return;
    const submitter = (event.nativeEvent as SubmitEvent)
      .submitter as HTMLButtonElement | null;
    const channel = submitter?.value || "whatsapp";
    const issues = validateContact(values, channel === "email");
    setErrors(issues);
    setFeedback(null);
    const firstError = Object.keys(issues)[0];
    if (firstError) {
      formRef.current
        ?.querySelector<HTMLInputElement>(`[name="${firstError}"]`)
        ?.focus();
      return;
    }
    if (channel === "whatsapp") {
      const href = whatsappLink(formatWhatsAppMessage(values, context));
      window.open(href, "_blank", "noopener,noreferrer");
      setFeedback({
        type: "whatsapp",
        message:
          "Sua mensagem está preparada. Confira e conclua o envio no WhatsApp.",
        href,
      });
      return;
    }
    setSending(true);
    controller.current = new AbortController();
    const timeout = window.setTimeout(() => controller.current?.abort(), 15000);
    const signature = JSON.stringify(values);
    if (submission.current?.signature !== signature)
      submission.current = { signature, id: crypto.randomUUID() };
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.current.signal,
        body: JSON.stringify({
          ...values,
          context,
          website: new FormData(event.currentTarget).get("website") || "",
          startedAt: startedAt.current,
          submissionId: submission.current.id,
        }),
      });
      const result: { ok?: boolean; id?: string; errors?: ContactErrors } =
        await response.json().catch(() => ({}));
      if (!response.ok || !result.ok || !result.id) {
        if (result.errors) setErrors(result.errors);
        setFeedback({
          type: "error",
          message:
            response.status === 429
              ? "Muitas tentativas em pouco tempo. Aguarde alguns minutos ou converse pelo WhatsApp."
              : "Não foi possível enviar por e-mail agora. Seus dados continuam aqui; tente novamente, use o WhatsApp ou escreva diretamente ao autor.",
        });
        return;
      }
      setFeedback({
        type: "success",
        message:
          "Sua mensagem foi aceita pelo serviço de e-mail. Obrigado por escrever para Roberto!",
      });
    } catch {
      setFeedback({
        type: "error",
        message:
          "Não foi possível confirmar o envio. Seus dados foram mantidos. Tente novamente ou converse pelo WhatsApp.",
      });
    } finally {
      window.clearTimeout(timeout);
      setSending(false);
    }
  };

  const field = (
    name: keyof ContactValues,
    label: string,
    multiline = false,
  ) => {
    const props = {
      id: `${id}-${name}`,
      name,
      value: values[name],
      onChange: (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
      ) => {
        setValues((current) => ({ ...current, [name]: event.target.value }));
        setErrors((current) => ({ ...current, [name]: undefined }));
        setFeedback(null);
      },
      "aria-invalid": !!errors[name],
      "aria-describedby": errors[name]
        ? `${id}-${name}-error`
        : name === "email"
          ? `${id}-email-hint`
          : undefined,
      maxLength: contactLimits[name],
      required: name !== "email",
    };
    return (
      <div className={`form-field field-${name}`}>
        <label htmlFor={props.id}>{label}</label>
        {multiline ? (
          <textarea {...props} rows={5} />
        ) : (
          <input
            {...props}
            type={name === "email" ? "email" : "text"}
            autoComplete={name === "email" ? "email" : "name"}
          />
        )}{" "}
        {errors[name] && (
          <p className="field-error" id={`${id}-${name}-error`}>
            {errors[name]}
          </p>
        )}
      </div>
    );
  };
  return (
    <form
      ref={formRef}
      className="contact-form"
      onSubmit={onSubmit}
      noValidate
      aria-label="Mensagem para Roberto Farias"
      aria-busy={sending}
    >
      <fieldset disabled={sending}>
        <legend className="sr-only">Seus dados e sua mensagem</legend>
        <div className="form-fields">
          {field("name", "Seu nome")}
          {field("email", "Seu e-mail")}
          {field("message", "O que você gostaria de compartilhar?", true)}
        </div>
        <p className="form-hint" id={`${id}-email-hint`}>
          O e-mail é necessário apenas para enviar por e-mail. Nome e mensagem
          são obrigatórios.
        </p>
        <div className="form-trap" aria-hidden="true">
          <label htmlFor={`${id}-website`}>Deixe este campo vazio</label>
          <input
            id={`${id}-website`}
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
        <div className="form-actions">
          <button
            type="submit"
            name="channel"
            value="whatsapp"
            className="button button-whatsapp"
          >
            <WhatsAppIcon />
            Enviar pelo WhatsApp<span aria-hidden="true">↗</span>
          </button>
          <button
            type="submit"
            name="channel"
            value="email"
            className="button button-email"
          >
            {sending ? "Enviando…" : "Enviar por e-mail"}
            <span aria-hidden="true">↗</span>
          </button>
        </div>
      </fieldset>
      <div className="form-feedback" aria-live="polite" aria-atomic="true">
        {feedback && (
          <p
            className={`feedback-${feedback.type}`}
            role={feedback.type === "error" ? "alert" : "status"}
          >
            {feedback.message}{" "}
            {feedback.href && (
              <a href={feedback.href} target="_blank" rel="noopener noreferrer">
                Abrir conversa no WhatsApp
              </a>
            )}
            {feedback.type === "error" && (
              <>
                {" "}
                <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
              </>
            )}
          </p>
        )}
      </div>
      <p className="form-privacy">
        Seus dados serão usados para esta conversa. Nenhum envio acontece antes
        de você escolher uma das opções acima.
      </p>
      <noscript>
        <p>
          Para usar o formulário, ative o JavaScript. Você também pode entrar em
          contato pelos links diretos de WhatsApp e e-mail desta página.
        </p>
      </noscript>
    </form>
  );
}
