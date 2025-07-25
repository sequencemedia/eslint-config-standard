import stylistic from '@stylistic/eslint-plugin'

export default {
  name: '@sequencemedia/eslint-config-standard/stylistic',
  plugins: {
    '@stylistic': stylistic
  },
  rules: {
    /**
     * `@stylistic/eslint-plugin`
     */
    '@stylistic/array-bracket-spacing': [
      'error',
      'never'
    ],
    '@stylistic/arrow-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],
    '@stylistic/block-spacing': [
      'error',
      'always'
    ],
    '@stylistic/brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: true
      }
    ],
    '@stylistic/comma-dangle': [
      'error',
      {
        arrays: 'never',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'never'
      }
    ],
    '@stylistic/comma-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],
    '@stylistic/comma-style': [
      'error',
      'last'
    ],
    '@stylistic/computed-property-spacing': [
      'error',
      'never',
      {
        enforceForClassMembers: true
      }
    ],
    '@stylistic/dot-location': [
      'error',
      'property'
    ],
    '@stylistic/eol-last': 'error', /*
    '@stylistic/func-call-spacing': [
      'error',
      'never'
    ], */
    '@stylistic/generator-star-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],
    '@stylistic/indent': [
      'error',
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        MemberExpression: 1,
        FunctionDeclaration: {
          parameters: 1,
          body: 1
        },
        FunctionExpression: {
          parameters: 1,
          body: 1
        },
        CallExpression: {
          arguments: 1
        },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        ignoreComments: false,
        ignoredNodes: [
          'TemplateLiteral *',
          'JSXElement',
          'JSXElement > *',
          'JSXAttribute',
          'JSXIdentifier',
          'JSXNamespacedName',
          'JSXMemberExpression',
          'JSXSpreadAttribute',
          'JSXExpressionContainer',
          'JSXOpeningElement',
          'JSXClosingElement',
          'JSXFragment',
          'JSXOpeningFragment',
          'JSXClosingFragment',
          'JSXText',
          'JSXEmptyExpression',
          'JSXSpreadChild'
        ],
        offsetTernaryExpressions: true
      }
    ],
    '@stylistic/key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true
      }
    ],
    '@stylistic/keyword-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],
    '@stylistic/lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true
      }
    ],
    '@stylistic/multiline-ternary': [
      'error',
      'always-multiline'
    ],
    '@stylistic/new-parens': 'error',
    '@stylistic/no-extra-parens': [
      'error',
      'functions'
    ],
    '@stylistic/no-floating-decimal': 'error',
    '@stylistic/no-mixed-operators': [
      'error',
      {
        groups: [
          [
            '==',
            '!=',
            '===',
            '!==',
            '>',
            '>=',
            '<',
            '<='
          ],
          [
            '&&',
            '||'
          ],
          [
            'in',
            'instanceof'
          ]
        ],
        allowSamePrecedence: true
      }
    ],
    '@stylistic/no-mixed-spaces-and-tabs': 'error',
    '@stylistic/no-multi-spaces': 'error',
    '@stylistic/no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 0
      }
    ],
    '@stylistic/no-tabs': 'error',
    '@stylistic/no-trailing-spaces': 'error',
    '@stylistic/no-whitespace-before-property': 'error',
    '@stylistic/object-curly-newline': [
      'error',
      {
        multiline: true,
        consistent: true
      }
    ],
    '@stylistic/object-curly-spacing': [
      'error',
      'always'
    ],
    '@stylistic/object-property-newline': [
      'error',
      { /*
        allowMultiplePropertiesPerLine: true, */
        allowAllPropertiesOnSameLine: true
      }
    ],
    '@stylistic/operator-linebreak': [
      'error',
      'after',
      {
        overrides: {
          '?': 'before',
          ':': 'before',
          '|>': 'before'
        }
      }
    ],
    '@stylistic/padded-blocks': [
      'error',
      {
        blocks: 'never',
        switches: 'never',
        classes: 'never'
      }
    ],
    '@stylistic/quote-props': [
      'error',
      'as-needed'
    ],
    '@stylistic/quotes': [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: 'never'
      }
    ],
    '@stylistic/rest-spread-spacing': [
      'error',
      'never'
    ],
    '@stylistic/semi': [
      'error',
      'never'
    ],
    '@stylistic/semi-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],
    '@stylistic/space-before-blocks': [
      'error',
      'always'
    ],
    '@stylistic/space-before-function-paren': [
      'error',
      'always'
    ],
    '@stylistic/space-in-parens': [
      'error',
      'never'
    ],
    '@stylistic/space-infix-ops': 'error',
    '@stylistic/space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false
      }
    ],
    '@stylistic/spaced-comment': [
      'error',
      'always',
      {
        line: {
          markers: [
            '*package',
            '!',
            '/',
            ',',
            '='
          ]
        },
        block: {
          balanced: true,
          markers: [
            '*package',
            '!',
            ',',
            ':',
            '::',
            'flow-include'
          ],
          exceptions: [
            '*'
          ]
        }
      }
    ],
    '@stylistic/template-curly-spacing': [
      'error',
      'never'
    ],
    '@stylistic/template-tag-spacing': [
      'error',
      'never'
    ],
    '@stylistic/wrap-iife': [
      'error',
      'any',
      {
        functionPrototypeMethods: true
      }
    ],
    '@stylistic/yield-star-spacing': [
      'error',
      'both'
    ],
    '@stylistic/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none'
        }
      }
    ]
  }
}
