const core = require('./core');
const react = require('./react');

const prettier = {
  plugins: ['prettier'],
  rules: {
    ...core,
    ...react,
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'always',
        bracketSpacing: true,
        endOfLine: 'lf',
        jsxBracketSameLine: false,
        jsxSingleQuote: false,
        printWidth: 80,
        quoteProps: 'as-needed',
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'none',
        useTabs: false
      }
    ]
  }
};

module.exports = prettier;
