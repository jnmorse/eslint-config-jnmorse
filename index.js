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

  // override placeholder case needed later
  overrides: [
    {
      files: ['*.test.js', '*.spec.js', 'setupTest.js'],
      rules: {}
    }
  ],

  parser: 'babel-eslint',

  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module'
  },

  rules: {
    strict: ['error', 'never']
  }
}
