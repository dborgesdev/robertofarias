export interface ContactValues {
  name: string;
  email: string;
  message: string;
}
export type ContactErrors = Partial<Record<keyof ContactValues, string>>;
export const contactLimits = { name: 100, email: 254, message: 2000 };
function hasControlCharacters(value: string, multiline = false) {
  return Array.from(value).some((character) => {
    const code = character.charCodeAt(0);
    return (
      code === 127 ||
      (code < 32 && !(multiline && (code === 9 || code === 10 || code === 13)))
    );
  });
}

export function validateContact(
  values: ContactValues,
  requireEmail = true,
): ContactErrors {
  const errors: ContactErrors = {};
  if (
    values.name.trim().length < 2 ||
    values.name.length > contactLimits.name ||
    hasControlCharacters(values.name)
  )
    errors.name = "Informe seu nome, entre 2 e 100 caracteres.";
  if (
    (requireEmail || values.email.trim()) &&
    (!/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(values.email.trim()) ||
      values.email.length > contactLimits.email ||
      hasControlCharacters(values.email))
  )
    errors.email = "Informe um endereço de e-mail válido.";
  if (
    values.message.trim().length < 10 ||
    values.message.length > contactLimits.message ||
    hasControlCharacters(values.message, true)
  )
    errors.message = "Escreva sua mensagem, entre 10 e 2.000 caracteres.";
  return errors;
}

export function normalizeContact(input: unknown): ContactValues | null {
  if (!input || typeof input !== "object") return null;
  const data = input as Record<string, unknown>;
  if (
    typeof data.name !== "string" ||
    typeof data.email !== "string" ||
    typeof data.message !== "string"
  )
    return null;
  return {
    name: data.name.trim(),
    email: data.email.trim(),
    message: data.message.trim(),
  };
}
