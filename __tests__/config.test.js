const { CLIEngine } = require('eslint');
const fs = require('fs');
const { resolve } = require('path');

const configFile = resolve(__dirname, '../index.js');

function getErrors(fileToTest) {
  const cli = new CLIEngine({ configFile });

  return cli.executeOnText(
    fs.readFileSync(resolve(__dirname, '../lib', fileToTest), 'utf8')
  );
}

describe('Validate ESLint config', () => {
  const files = ['class-property.js'];
  files.forEach(file => {
    test(`the loaded source file ${file} in ESLint to validate all rules are correct`, () => {
      expect(getErrors(file).results[0].messages).toEqual([]);
    });
  });
});
