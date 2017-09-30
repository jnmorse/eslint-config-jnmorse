module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: './index.js',
  parserOptions: {
    ecmaVersion: 8,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    }
  }
};
