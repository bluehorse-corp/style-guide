module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    "comma-dangle": ["error", "only-multiline"],
    "@typescript-eslint/comma-dangle": ["error", "only-multiline"],
    "@typescript-eslint/quotes": ["error", "single", { "avoidEscape": true }],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "prettier/prettier": ["off", { "singleQuote": true }],
  },
};
