module.exports = {
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/node',
    './rules/style',
    './rules/variables',
    './rules/es6',
    './rules/imports',
    './rules/react',
    './rules/react-a11ly'
  ].map(require.resolve),

  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module'
  },

  rules: {
    strict: ['error', 'never']
  }
}
