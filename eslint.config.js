import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import eslintPluginPrettier from "eslint-plugin-prettier";

export default defineConfig([
  {
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/.astro/**",
      "**/.vercel/**",
      "**/pnpm-lock.yaml",
      "**/package-lock.json",
      "**/*.min.js",
      "**/public/**",
    ],
  },
  js.configs.recommended,
  eslintConfigPrettier,
  {
    files: ["**/*.mjs", "**/*.cjs", "**/astro.config.*"],
    languageOptions: {
      globals: {
        URL: "readonly",
        URLSearchParams: "readonly",
        process: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        module: "readonly",
        require: "readonly",
        Buffer: "readonly",
      },
    },
  },
  {
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      "prettier/prettier": "error",
    },
  },
]);
