// TypeScript Lint Configuration

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react-hooks'],
  extends: ['plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint', 'plugin:prettier/recommended'],
  rules: {
    semi: [2, 'always'],
    '@typescript-eslint/explicit-function-return-type': [
      0,
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
      },
    ],
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/indent': [2, 2],
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-non-null-assertion': [0],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react-hooks/exhaustive-deps': 'error',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
