const nextConfig = require("eslint-config-next/core-web-vitals");

module.exports = [
  { ignores: [".vercel/**"] },
  ...nextConfig,
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
];
