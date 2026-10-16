import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import hooks from "eslint-plugin-react-hooks";
export default tseslint.config(
  { ignores: ["dist", ".prerender", ".qa", "node_modules"] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: { globals: globals.browser },
    plugins: { "react-hooks": hooks },
    rules: hooks.configs.recommended.rules,
  },
  { files: ["**/*.mjs"], languageOptions: { globals: globals.node } },
  {
    files: ["api/**/*.ts", "server/**/*.ts"],
    languageOptions: { globals: globals.node },
  },
);
