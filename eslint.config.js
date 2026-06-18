import js from "@eslint/js";

export default [
  { ignores: ["dist", "node_modules", "build"] },
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        document: "readonly",
        window: "readonly",
        console: "readonly",
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      "no-unused-vars": ["warn", { "varsIgnorePattern": "^[A-Z_]" }],
    },
  },
];
