const { parser, extends: defaultExtends, plugins } = require('../base/lib/shared');

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  parser,
  extends: [
    ...defaultExtends,
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:react/recommended',
    // 'plugin:jsx-a11y/recommended',
  ],
  plugins: [...plugins, 'react', 'react-hooks'],
  rules: {
    "react-hooks/rules-of-hooks": "warn",
    "react-hooks/exhaustive-deps": "off",
    "react/react-in-jsx-scope": "off",
    "react/display-name": "off",
    // React Component extension 변경 후 제거 js => jsx
    'react/react-in-jsx-scope': 'off',
    // empty function 제거 후 제거
    '@typescript-eslint/no-empty-function': 'off',
    // double quote string 제거 후 제거
    '@typescript-eslint/quotes': 'off',
    // 미사용 변수 제거후 error로 변경
    '@typescript-eslint/no-unused-vars': 'off',
    // 모든 컴포넌트에서 props validation 추가후 제거
    'react/prop-types': 'off',
  },
};
