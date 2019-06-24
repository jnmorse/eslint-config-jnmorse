const { rules } = require('eslint-config-prettier/react');

/**
 * deprecated rules
 */
delete rules['react/jsx-space-before-closing'];

/**
 * React Rules
 */
module.exports = {
  ...rules
};
