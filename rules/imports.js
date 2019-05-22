module.exports = {
  env: {
    es6: true
  },

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },

  plugins: ['import'],

  rules: {
    'import/default': 'off',
    'import/dynamic-import-chunkname': 'off', // No idea what this does or why I should care
    'import/export': 'error',
    'import/exports-last': 'error',
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        jsx: 'never'
      }
    ],
    'import/first': ['error', 'absolute-first'],
    'import/group-exports': 'error',
    'import/max-dependencies': ['off', { max: 10 }],
    'import/named': 'off',
    'import/namespace': 'off',
    'import/newline-after-import': 'error',
    'import/no-absolute-path': 'error',
    'import/no-amd': 'error',
    'import/no-anonymous-default-export': [
      'off',
      {
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowArray: false,
        allowArrowFunction: false,
        allowLiteral: false,
        allowObject: false
      }
    ],
    'import/no-commonjs': 'off',
    'import/no-cycle': ['off', { maxDepth: 1 }], // Leaving this off

    // Default exports are ok
    'import/no-default-export': 'off',

    'import/no-deprecated': 'off',
    'import/no-duplicates': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'test/**', // tape, common npm pattern
          'tests/**', // also common npm pattern
          'spec/**', // mocha, rspec-like pattern
          '**/__tests__/**', // jest pattern
          'test.{js,jsx}', // repos with a single test file
          'test-*.{js,jsx}', // repos with multiple top-level test files
          '**/*.{test,spec}.{js,jsx}', // tests where the extension denotes that it is a test
          '**/jest.config.js', // jest config
          '**/setupTests.js', // jest test setup
          '**/webpack.config.js', // webpack config
          '**/webpack.config.*.js', // webpack config
          '**/rollup.config.js', // rollup config
          '**/rollup.config.*.js', // rollup config
          '**/gulpfile.js', // gulp config
          '**/gulpfile.*.js', // gulp config
          '**/Gruntfile{,.js}', // grunt config
          '**/protractor.conf.js', // protractor config
          '**/protractor.conf.*.js' // protractor config
        ],
        optionalDependencies: false
      }
    ],
    'import/no-internal-modules': ['off', { allow: [] }],
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-named-default': 'error',
    'import/no-named-export': 'off',
    'import/no-namespace': 'off',
    'import/no-nodejs-modules': 'off',
    'import/no-relative-parent-imports': 'error',
    'import/no-restricted-paths': 'off',
    'import/no-self-import': 'error',
    'import/no-unassigned-import': 'off',
    'import/no-unresolved': [
      'error',
      {
        caseSensitive: true,
        commonjs: true
      }
    ],
    'import/no-unused-modules': 'error',

    // Named exports are ok
    'import/no-useless-path-segments': 'error',

    'import/no-webpack-loader-syntax': 'error',

    'import/order': [
      'off',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'never'
      }
    ],

    'import/prefer-default-export': 'warn',
    'import/unambiguous': 'off'
  },

  settings: {
    'import/core-modules': [],
    'import/extensions': ['.js', '.jsx'],
    'import/ignore': [
      'node_modules',
      '\\.(coffee|scss|css|less|hbs|svg|json)$'
    ],
    'import/resolver': {
      node: {
        extensions: ['.js', '.json']
      }
    }
  }
}
