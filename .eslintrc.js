module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true
  },

  extends: './index.js',

  parserOptions: {
    ecmaVersion: 8,
    ecmaFeatures: {
      jsx: true
    }
  }
};
