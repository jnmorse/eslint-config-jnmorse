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
    './rules/react-a11ly',
    './rules/prettier.js'
  ].map(require.resolve),

  // override placeholder case needed later
  overrides: [
    {
      files: ['*.test.js', '*.spec.js', 'setupTest.js'],
      rules: {
        'max-lines-per-function': 'off'
      }
    }
  ],

  parser: 'babel-eslint',

  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module'
  },

  plugins: ['prettier'],

  rules: {
    strict: ['error', 'never']
  }
}
