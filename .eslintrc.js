module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-plusplus': 'off',
    'prefer-arrow-callback': 'off',
    'vars-on-top': 'off',
    'no-loop-func': 'off',
    'func-names': 'off',
    'no-restricted-syntax': 'off',
    'linebreak-style': 'off',
    'no-shadow': 'off',
    'no-console': 'off',
    'prefer-destructuring': 'off',
    'import/prefer-default-export': 'off',
  },
};
