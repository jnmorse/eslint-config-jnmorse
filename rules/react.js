module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },

  plugins: [
    'react'
  ],

  rules: {
    'class-methods-use-this': ['error', {
      exceptMethods: ['render', 'getInitialState', 'getDefaultProps', 'getChildContext', 'componentWillMount', 'componentDidMount', 'componentWillReceiveProps', 'shouldComponentUpdate', 'componentWillUpdate', 'componentDidUpdate', 'componentWillUnmount']
    }],
    'jsx-quotes': ['error', 'prefer-double'],
    'react/boolean-prop-naming': ['off', {
      propTypeNames: ['bool', 'mutuallyExclusiveTrueProps'],
      rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+'
    }],
    'react/button-has-type': ['error', {
      button: true,
      reset: true,
      submit: true
    }],
    'react/default-props-match-prop-types': ['off', {
      allowRequiredDefaults: false
    }],
    'react/destructuring-assignment': ['error', 'always', {
      ignoreClassFields: true
    }],
    'react/display-name': ['off', {
      ignoreTranspilerName: false
    }],
    'react/forbid-component-props': ['off', {
      forbid: []
    }],
    'react/forbid-dom-props': 'off',
    'react/forbid-elements': ['off', {
      forbid: []
    }],
    'react/forbid-foreign-prop-types': 'off',
    'react/forbid-prop-types': ['error', {
      forbid: ['any', 'array', 'object']
    }],
    'react/jsx-boolean-value': ['error', 'never', {
      always: []
    }],
    'react/jsx-child-element-spacing': 'off',
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
    'react/jsx-closing-tag-location': 'error',

    /**
     * Children set to ignore till fix is found for whitespace issue,
     * then should be set to always?
     */
    'react/jsx-curly-brace-presence': ['off', {
      children: 'always',
      props: 'ignore'
    }],
    'react/jsx-curly-spacing': ['error', 'never', {
      allowMultiline: true
    }],
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-filename-extension': ['error', {
      extensions: ['.js']
    }],
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    'react/jsx-fragments': ['error', 'syntax'],
    'react/jsx-handler-names': ['off', {
      eventHandlerPrefix: 'handle',
      eventHandlerPropPrefix: 'on'
    }],
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-key': 'off',
    'react/jsx-max-depth': ['error', {
      max: 4
    }],
    'react/jsx-max-props-per-line': ['error', {
      maximum: 1,
      when: 'multiline'
    }],
    'react/jsx-no-bind': ['error', {
      allowArrowFunctions: true,
      allowBind: false,
      ignoreRefs: true
    }],
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-duplicate-props': ['error', {
      ignoreCase: true
    }],
    'react/jsx-no-literals': ['off', {
      noStrings: true
    }],
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-one-expression-per-line': ['error', {
      allow: 'single-child'
    }],
    'react/jsx-pascal-case': ['error', {
      allowAllCaps: true,
      ignore: []
    }],
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-sort-default-props': ['off', {
      ignoreCase: true
    }],
    'react/jsx-sort-props': ['off', {
      callbacksLast: false,
      ignoreCase: true,
      noSortAlphabetically: false,
      reservedFirst: true,
      shorthandFirst: false,
      shorthandLast: false
    }],
    'react/jsx-tag-spacing': ['error', {
      afterOpening: 'never',
      beforeSelfClosing: 'always',
      closingSlash: 'never'
    }],
    'react/jsx-uses-react': ['error'],
    'react/jsx-uses-vars': 'error',
    'react/jsx-wrap-multilines': ['error', {
      arrow: true,
      assignment: true,
      declaration: true,
      return: true
    }],
    'react/no-access-state-in-setstate': 'error',
    'react/no-array-index-key': 'error',
    'react/no-children-prop': 'error',
    'react/no-danger': 'warn',
    'react/no-danger-with-children': 'error',
    'react/no-deprecated': ['error'],
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-direct-mutation-state': 'off',
    'react/no-find-dom-node': 'error',
    'react/no-is-mounted': 'error',
    'react/no-multi-comp': ['error', {
      ignoreStateless: true
    }],
    'react/no-redundant-should-component-update': 'off',
    'react/no-render-return-value': 'error',
    'react/no-set-state': 'off',
    'react/no-string-refs': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'off',
    'react/no-unescaped-entities': 'error',
    'react/no-unknown-property': 'error',
    'react/no-unsafe': ['error', {
      checkAliases: false
    }],
    'react/no-unused-prop-types': ['error', {
      customValidators: [],
      skipShapeProps: true
    }],
    'react/no-unused-state': 'off',
    'react/no-will-update-set-state': 'error',
    'react/prefer-es6-class': ['error', 'always'],
    'react/prefer-stateless-function': ['off', {
      ignorePureComponents: true
    }],
    'react/prop-types': ['error', {
      customValidators: [],
      ignore: [],
      skipUndeclared: false
    }],
    'react/react-in-jsx-scope': 'error',
    'react/require-default-props': 'error',
    'react/require-optimization': ['off', {
      allowDecorators: []
    }],
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error',
    'react/sort-comp': ['error', {
      order: ['static-methods', 'lifecycle', '/^on.+$/', 'getters', 'setters', '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/', 'everything-else', '/^render.+$/', 'render']
    }],
    'react/sort-prop-types': ['off', {
      callbacksLast: false,
      ignoreCase: true,
      requiredFirst: false
    }],
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error'
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json']
      }
    },
    propWrapperFunctions: ['forbidExtraProps', 'exact', 'Object.freeze'],
    react: {
      pragma: 'React',
      version: '16.8'
    }
  }
}
