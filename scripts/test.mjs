import { build } from "vite";
import { spawnSync } from "node:child_process";
await build({
  configFile: false,
  publicDir: false,
  build: { ssr: "tests/entry.ts", outDir: ".qa/tests", emptyOutDir: true },
});
const result = spawnSync(
  process.execPath,
  ["--test", "tests/contact.test.mjs"],
  { stdio: "inherit" },
);
process.exitCode = result.status ?? 1;
