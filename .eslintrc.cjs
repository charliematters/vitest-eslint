module.exports = {
  plugins: ["vitest"],
  extends: ["plugin:vitest/all"],
  parserOptions: { sourceType: "module", ecmaVersion: 2018 },
  rules: {
    "vitest/no-hooks": "off",
    "vitest/prefer-expect-assertions": "off",
  },
};
