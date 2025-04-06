import esLint from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import react from "eslint-plugin-react";
import reactRecommended from "eslint-plugin-react/configs/recommended.js";
import jsxRuntime from "eslint-plugin-react/configs/jsx-runtime.js";

const compat = new FlatCompat();

/** @type {import('eslint').Linter.FlatConfig} */
const configTypeScript = {
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
  files: ["**/*.tsx"],
  plugins: {
    react: react,
  },
  rules: {
    ...reactRecommended.rules,
    ...jsxRuntime.rules,
  },
};

export default [
  esLint.configs.recommended,
  configTypeScript,
  configReact,
  ...compat.extends("plugin:react-hooks/recommended"),
];
