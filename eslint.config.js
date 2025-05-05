export default [
  {
    ignores: ["tests"], 
    rules: {
      "no-console": "warn", 
      semi: ["error", "always"], 
      quotes: ["error", "single"] 
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        document: "readonly",
        Audio: "readonly"
      }
    }
  }
];