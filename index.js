module.exports = {
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/style',
    './rules/variables',
    './rules/es6',
    './rules/imports',
    './rules/react',
    './rules/react-a11y',
    './rules/prettier'
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

  rules: {
    strict: ['error', 'never']
  }
};
