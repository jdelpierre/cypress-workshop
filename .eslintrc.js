module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    'cypress/globals': true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: [
    'cypress',
  ],
  rules: {
  },
};
