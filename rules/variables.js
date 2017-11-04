const restrictedGlobals = require('eslint-restricted-globals')

module.exports = {
  rules: {
    'init-declarations': 'off',
    'no-catch-shadow': 'off',
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-restricted-globals': ['error', 'isFinite', 'isNaN'].concat(restrictedGlobals),
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'off',
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
    'no-use-before-define': ['error', { functions: true, classes: true, variables: true }]
  }
}
