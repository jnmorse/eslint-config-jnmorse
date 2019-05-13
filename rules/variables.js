const restrictedGlobals = require('eslint-restricted-globals')

module.exports = {
  rules: {
    'init-declarations': 'off',
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-restricted-globals': ['error', 'isFinite', 'isNaN'].concat(restrictedGlobals),
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'off',
    'no-unused-vars': ['error', {
      args: 'after-used',
      ignoreRestSiblings: true,
      vars: 'all'
    }],
    'no-use-before-define': ['error', {
      classes: true,
      functions: true,
      variables: true
    }]
  }
}
