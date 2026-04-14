import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import eslintPluginPrettier from "eslint-plugin-prettier";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  eslintConfigPrettier,
  {
    plugins: { prettier: eslintPluginPrettier },
    rules: { "prettier/prettier": "error" },
  },
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    ".vercel/**",
    ".astro/**",
    "docs/**",
    "*.md",
    "next-env.d.ts",
    "pnpm-lock.yaml",
    "package-lock.json",
    "public/**",
  ]),
]);

export default eslintConfig;
