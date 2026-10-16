import type { ContactValues } from "./contactValidation";
import { contactMessages, type ContactContext } from "../data/contact";
export function formatWhatsAppMessage(
  values: ContactValues,
  context: ContactContext,
) {
  return `${contactMessages[context]}\n\nMeu nome é ${values.name.trim()}.${values.email.trim() ? `\nE-mail para retorno: ${values.email.trim()}` : ""}\n\n${values.message.trim()}`;
}
