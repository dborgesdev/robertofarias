import type { Plugin } from "vite";
import type { IncomingMessage, ServerResponse } from "node:http";
import { createContactHandler } from "../api/contact";
function canonicalContact(
  req: IncomingMessage,
  res: ServerResponse,
  next: () => void,
) {
  const url = new URL(req.url || "/", "http://localhost");
  if (!["/contato", "/sobre"].includes(url.pathname)) return next();
  res.statusCode = 308;
  res.setHeader("Location", `${url.pathname}/${url.search}`);
  res.end();
}
export function contactApi(
  environment: Record<string, string | undefined>,
): Plugin {
  const handler = createContactHandler(environment);
  return {
    name: "local-contact-api",
    configureServer(server) {
      server.middlewares.use(canonicalContact);
      server.middlewares.use("/api/contact", handler);
    },
    configurePreviewServer(server) {
      server.middlewares.use(canonicalContact);
      server.middlewares.use("/api/contact", handler);
    },
  };
}
