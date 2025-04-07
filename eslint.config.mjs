import { defineConfig, globalIgnores } from "eslint/config";
import esLint from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import react from "eslint-plugin-react";
import reactRecommended from "eslint-plugin-react/configs/recommended.js";
import storybook from "eslint-plugin-storybook";
import jsxRuntime from "eslint-plugin-react/configs/jsx-runtime.js";

const compat = new FlatCompat();

/** @type {import('eslint').Linter.FlatConfig} */
const configTypeScript = {
  name: "typescript",
  files: ["**/*.ts", "**/*.tsx", "**/*.mts", "**/*.cts"],
  languageOptions: {
    parser: tsParser,
    parserOptions: {
      project: true,
    },
  },
  plugins: {
    "@typescript-eslint": tsPlugin,
  },
  rules: {
    ...tsPlugin.configs["eslint-recommended"].overrides[0].rules,
  },
};

/** @type {import('eslint').Linter.FlatConfig} */
const configReact = {
  name: "react",
  files: ["**/*.tsx"],
  plugins: {
    react: react,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    ...reactRecommended.rules,
    ...jsxRuntime.rules,
  },
};

export default defineConfig([
  globalIgnores(
    [
      "node_modules",
      "shared/**",
      "dashboard/**",
      "extension/**",
      "graphics/**",
    ],
    "global/ignores",
  ),
  {
    name: "eslint/recommended",
    ...esLint.configs.recommended,
  },
  configTypeScript,
  configReact,
  storybook.configs["flat/recommended"],
  ...compat.extends("plugin:react-hooks/recommended"),
]);
