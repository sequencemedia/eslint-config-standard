import n from 'eslint-plugin-n'
import p from 'eslint-plugin-promise'
import i from 'eslint-plugin-import'

export default {
  name: '@sequencemedia/eslint-config-standard/standard',
  plugins: {
    n,
    promise: p,
    import: i
  },
  rules: {
    /**
     *  Standard
     */
    'no-var': 'warn',
    'object-shorthand': [
      'warn',
      'properties'
    ],
    'accessor-pairs': [
      'error',
      {
        setWithoutGet: true,
        enforceForClassMembers: true
      }
    ],
    'array-callback-return': [
      'error',
      {
        allowImplicit: false,
        checkForEach: false
      }
    ],
    camelcase: [
      'error',
      {
        allow: [
          '^UNSAFE_'
        ],
        properties: 'never',
        ignoreGlobals: true
      }
    ],
    'constructor-super': 'error',
    curly: [
      'error',
      'multi-line'
    ],
    'default-case-last': 'error',
    'dot-notation': [
      'error',
      { allowKeywords: true }
    ],
    eqeqeq: [
      'error',
      'always',
      { null: 'ignore' }
    ],
    'new-cap': [
      'error',
      {
        newIsCap: true,
        capIsNew: false,
        properties: true
      }
    ],
    'no-array-constructor': 'error',
    'no-async-promise-executor': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-class-assign': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-const-assign': 'error',
    'no-constant-condition': [
      'error',
      {
        checkLoops: false
      }
    ],
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-delete-var': 'error',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-useless-backreference': 'error',
    'no-empty': [
      'error',
      {
        allowEmptyCatch: true
      }
    ],
    'no-empty-character-class': 'error',
    'no-empty-pattern': 'error',
    'no-eval': 'error',
    'no-ex-assign': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': 'error',
    'no-fallthrough': 'error',
    'no-func-assign': 'error',
    'no-global-assign': 'error',
    'no-implied-eval': 'error',
    'no-import-assign': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-iterator': 'error',
    'no-labels': [
      'error',
      {
        allowLoop: false,
        allowSwitch: false
      }
    ],
    'no-lone-blocks': 'error',
    'no-loss-of-precision': 'error',
    'no-misleading-character-class': 'error',
    'no-prototype-builtins': 'error',
    'no-useless-catch': 'error',
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-object-constructor': 'error',
    'no-new-native-nonconstructor': 'error',
    'no-new-wrappers': 'error',
    'no-obj-calls': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-proto': 'error',
    'no-redeclare': [
      'error',
      {
        builtinGlobals: false
      }
    ],
    'no-regex-spaces': 'error',
    'no-return-assign': [
      'error',
      'except-parens'
    ],
    'no-self-assign': [
      'error',
      {
        props: true
      }
    ],
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow-restricted-names': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-this-before-super': 'error',
    'no-throw-literal': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-unexpected-multiline': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': [
      'error',
      {
        defaultAssignment: false
      }
    ],
    'no-unreachable': 'error',
    'no-unreachable-loop': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true
      }
    ],
    'no-unused-vars': [
      'error',
      {
        args: 'none',
        caughtErrors: 'none',
        ignoreRestSiblings: true,
        vars: 'all'
      }
    ],
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false,
        variables: false
      }
    ],
    'no-useless-call': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-escape': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'no-with': 'error',
    'one-var': [
      'error',
      {
        initialized: 'never'
      }
    ],
    'prefer-const': [
      'error',
      {
        destructuring: 'all'
      }
    ],
    'prefer-promise-reject-errors': 'error',
    'prefer-regex-literals': [
      'error',
      {
        disallowRedundantWrapping: true
      }
    ],
    'symbol-description': 'error',
    'unicode-bom': [
      'error',
      'never'
    ],
    'use-isnan': [
      'error',
      {
        enforceForSwitchCase: true,
        enforceForIndexOf: true
      }
    ],
    'valid-typeof': [
      'error',
      {
        requireStringLiterals: true
      }
    ],
    yoda: [
      'error',
      'never'
    ],
    /**
     * `eslint-plugin-n`
     */
    'n/handle-callback-err': [
      'error',
      '^(err|error)$'
    ],
    'n/no-callback-literal': 'error',
    'n/no-deprecated-api': 'error',
    'n/no-exports-assign': 'error',
    'n/no-new-require': 'error',
    'n/no-path-concat': 'error',
    'n/process-exit-as-throw': 'error',
    /**
     * `eslint-plugin-promise`
     */
    'promise/param-names': 'error',
    /**
     * `eslint-plugin-import`
     */
    'import/export': 'error',
    'import/first': 'error',
    'import/no-absolute-path': [
      'error',
      {
        esmodule: true,
        commonjs: true,
        amd: false
      }
    ],
    'import/no-duplicates': 'error',
    'import/no-named-default': 'error',
    'import/no-webpack-loader-syntax': 'error'
  }
}
