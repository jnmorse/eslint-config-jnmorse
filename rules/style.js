module.exports = {
  rules: {
    'array-bracket-newline': [
      'off',
      {
        minItems: 3,
        multiline: true
      }
    ],
    'array-bracket-spacing': ['error', 'never'],
    'array-element-newline': [
      'off',
      {
        minItems: 3,
        multiline: true
      }
    ],
    'block-spacing': ['error', 'always'],
    'brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: true
      }
    ],
    camelcase: [
      'error',
      {
        properties: 'never'
      }
    ],
    'capitalized-comments': [
      'off',
      'never',
      {
        block: {
          ignoreConsecutiveComments: true,
          ignoreInlineComments: true,
          ignorePattern: '.*'
        },
        line: {
          ignoreConsecutiveComments: true,
          ignoreInlineComments: true,
          ignorePattern: '.*'
        }
      }
    ],
    'comma-dangle': ['error', 'never'],
    'comma-spacing': [
      'error',
      {
        after: true,
        before: false
      }
    ],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': ['error', 'never'],
    'consistent-this': 'off',
    'eol-last': ['error', 'always'],
    'func-call-spacing': ['error', 'never'],
    'func-name-matching': [
      'off',
      'always',
      {
        includeCommonJSModuleExports: false
      }
    ],
    'func-names': 'warn',
    'func-style': ['off', 'expression'],
    'function-paren-newline': ['error', 'multiline'],
    'id-blacklist': 'off',
    'id-length': 'off',
    'id-match': 'off',
    'implicit-arrow-linebreak': ['error', 'beside'],
    indent: [
      'error',
      2,
      {
        ArrayExpression: 1,
        CallExpression: {
          arguments: 1
        },
        flatTernaryExpressions: false,
        FunctionDeclaration: {
          body: 1,
          parameters: 1
        },
        FunctionExpression: {
          body: 1,
          parameters: 1
        },
        ignoredNodes: ['JSXElement', 'JSXElement *'],
        ImportDeclaration: 1,
        ObjectExpression: 1,
        outerIIFEBody: 1,
        SwitchCase: 1,
        VariableDeclarator: 1
      }
    ],
    'jsx-quotes': ['off', 'prefer-double'],
    'key-spacing': [
      'error',
      {
        afterColon: true,
        beforeColon: false
      }
    ],
    'keyword-spacing': [
      'error',
      {
        after: true,
        before: true,
        overrides: {
          case: {
            after: false
          },
          return: {
            after: false
          },
          throw: {
            after: true
          }
        }
      }
    ],
    'line-comment-position': [
      'off',
      {
        applyDefaultPatterns: true,
        ignorePattern: '',
        position: 'above'
      }
    ],
    'linebreak-style': ['error', 'unix'],
    'lines-around-comment': 'off',
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: false
      }
    ],
    'max-depth': ['off', 4],
    'max-len': [
      'error',
      100,
      2,
      {
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreUrls: true
      }
    ],
    'max-lines': [
      'off',
      {
        max: 300,
        skipBlankLines: true,
        skipComments: true
      }
    ],
    'max-lines-per-function': [
      'error',
      {
        IIFEs: false,
        max: 50,
        skipBlankLines: false,
        skipComments: false
      }
    ],
    'max-nested-callbacks': 'off',
    'max-params': ['off', 3],
    'max-statements': ['off', 10],
    'max-statements-per-line': [
      'off',
      {
        max: 1
      }
    ],
    'multiline-comment-style': ['error', 'starred-block'],
    'multiline-ternary': ['off', 'never'],
    'new-cap': [
      'error',
      {
        capIsNew: false,
        capIsNewExceptions: [
          'Immutable.Map',
          'Immutable.Set',
          'Immutable.List'
        ],
        newIsCap: true,
        newIsCapExceptions: []
      }
    ],
    'new-parens': 'error',
    'newline-per-chained-call': [
      'error',
      {
        ignoreChainWithDepth: 4
      }
    ],
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-continue': 'error',
    'no-inline-comments': 'off',
    'no-lonely-if': 'error',
    'no-mixed-operators': [
      'error',
      {
        allowSamePrecedence: false,
        groups: [
          ['+', '-', '*', '/', '%', '**'],
          ['&', '|', '^', '~', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof']
        ]
      }
    ],
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-assign': ['error'],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 2,
        maxEOF: 1
      }
    ],
    'no-negated-condition': 'off',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-plusplus': 'error',
    'no-restricted-syntax': [
      'error',
      {
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
        selector: 'ForInStatement'
      },
      {
        message:
          'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
        selector: 'ForOfStatement'
      },
      {
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
        selector: 'LabeledStatement'
      },
      {
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
        selector: 'WithStatement'
      }
    ],
    'no-tabs': 'error',
    'no-ternary': 'off',
    'no-trailing-spaces': [
      'error',
      {
        ignoreComments: false,
        skipBlankLines: false
      }
    ],
    'no-underscore-dangle': [
      'error',
      {
        allow: [],
        allowAfterSuper: false,
        allowAfterThis: false,
        enforceInMethodNames: false
      }
    ],
    'no-unneeded-ternary': [
      'error',
      {
        defaultAssignment: false
      }
    ],
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': 'off',
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          consistent: true,
          minProperties: 4,
          multiline: true
        },
        ObjectPattern: {
          consistent: true,
          minProperties: 4,
          multiline: true
        }
      }
    ],
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': [
      'error',
      {
        allowMultiplePropertiesPerLine: true
      }
    ],
    'one-var': ['error', 'never'],
    'one-var-declaration-per-line': ['error', 'always'],
    'operator-assignment': ['error', 'always'],
    'operator-linebreak': 'off',
    'padded-blocks': [
      'error',
      {
        blocks: 'never',
        classes: 'never',
        switches: 'never'
      }
    ],
    'padding-line-between-statements': 'off',
    'prefer-object-spread': 'error',
    'quote-props': [
      'error',
      'as-needed',
      {
        keywords: false,
        numbers: false,
        unnecessary: true
      }
    ],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true
      }
    ],
    semi: ['error', 'never'],
    'semi-spacing': [
      'error',
      {
        after: true,
        before: false
      }
    ],
    'semi-style': ['error', 'last'],
    'sort-keys': [
      'off',
      'asc',
      {
        caseSensitive: false,
        natural: true
      }
    ],
    'sort-vars': 'off',
    'space-before-blocks': 'error',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        asyncArrow: 'always',
        named: 'never'
      }
    ],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': [
      'error',
      {
        nonwords: false,
        overrides: {},
        words: true
      }
    ],
    'spaced-comment': [
      'error',
      'always',
      {
        block: {
          // space here to support sprockets directives
          balanced: true,
          exceptions: ['-', '+'],
          markers: ['=', '!']
        },
        line: {
          exceptions: ['-', '+'],
          markers: ['=', '!'] // space here to support sprockets directives
        }
      }
    ],
    'switch-colon-spacing': [
      'error',
      {
        after: true,
        before: false
      }
    ],
    'template-tag-spacing': ['error', 'never'],
    'unicode-bom': ['error', 'never'],
    'wrap-regex': 'off'
  }
}
