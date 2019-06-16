const core = require('./core')
const react = require('./react')

const prettier = {
  plugins: ['prettier'],
  rules: { ...core, ...react, 'prettier/prettier': 'error' }
}

module.exports = prettier
