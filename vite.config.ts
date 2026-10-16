import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "node:path";
import { contactApi } from "./server/contactApi";
export default defineConfig(({ isSsrBuild, mode }) => ({
  appType: "mpa",
  plugins: [
    react(),
    tailwindcss(),
    contactApi({ ...process.env, ...loadEnv(mode, process.cwd(), "") }),
  ],
  build: isSsrBuild
    ? {}
    : {
        rollupOptions: {
          input: {
            home: resolve("index.html"),
            book: resolve("livros/ainda-tenho-estradas/index.html"),
            contact: resolve("contato/index.html"),
            about: resolve("sobre/index.html"),
          },
        },
      },
}));
