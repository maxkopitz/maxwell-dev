const nextConfig = require("eslint-config-next/core-web-vitals");
const tseslint = require("@typescript-eslint/eslint-plugin");
const tsParser = require("@typescript-eslint/parser");

module.exports = [
  ...nextConfig,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: { parser: tsParser },
    plugins: { "@typescript-eslint": tseslint },
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
  {
    rules: { "prettier/prettier": "off" },
  },
];
