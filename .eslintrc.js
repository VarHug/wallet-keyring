module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'standard',
    'react-app',
    'react-app/jest',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    // style
    semi: ['error', 'always'],
    'comma-dangle': [2, 'only-multiline'],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    // React
    'react/react-in-jsx-scope': 'off',
  },
};
