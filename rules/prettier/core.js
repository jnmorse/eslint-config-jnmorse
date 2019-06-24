/**
 * taking from https://github.com/prettier/eslint-config-prettier
 * some of the rules that where defined where deprecated.
 */

const { rules } = require('eslint-config-prettier');

/* these rules no longer exists */
delete rules['generator-star'];
delete rules['no-arrow-condition'];
delete rules['no-comma-dangle'];
delete rules['no-reserved-keys'];
delete rules['no-space-before-semi'];
delete rules['no-wrap-func'];
delete rules['space-after-function-name'];
delete rules['space-after-keywords'];
delete rules['space-before-function-parentheses'];
delete rules['space-before-keywords'];
delete rules['space-in-brackets'];
delete rules['space-return-throw-case'];
delete rules['space-unary-word-ops'];

/* these rules are deprecated */
delete rules['indent-legacy'];
delete rules['no-spaced-func'];

module.exports = {
  ...rules
};
