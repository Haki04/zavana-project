import js from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    ...js.configs.recommended,
    languageOptions: {
      globals: {
        document: "readonly",
        window: "readonly",
        fetch: "readonly",
        console: "readonly",
        alert: "readonly",
      },
    },
  },
];
