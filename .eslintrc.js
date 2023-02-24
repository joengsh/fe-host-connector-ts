module.exports = {
  env: {
    browser: true,
    amd: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off'
  }
};
