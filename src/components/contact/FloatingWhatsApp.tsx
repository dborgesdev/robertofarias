import { acquisitionLink, type ContactContext } from "../../data/contact";
import WhatsAppIcon from "../ui/WhatsAppIcon";
export default function FloatingWhatsApp({
  context,
}: {
  context: ContactContext;
}) {
  return (
    <a
      className="whatsapp-floating"
      href={acquisitionLink(context)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={
        context === "estradas"
          ? "Conversar com Roberto no WhatsApp sobre Ainda Tenho Estradas (abre em nova aba)"
          : "Conversar com Roberto Farias no WhatsApp (abre em nova aba)"
      }
    >
      <WhatsAppIcon />
      <span>Converse com Roberto</span>
    </a>
  );
}
