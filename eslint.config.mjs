import globals from 'globals'
import merge from './merge.mjs'

export default [
  ...merge({
    files: [
      '**/*.{mjs,cjs}'
    ],
    ignores: [
      'test'
    ],
    languageOptions: {
      globals: {
        ...globals.node
      }
    }
  }),
  ...merge({
    files: [
      'test/**/*.{mjs,cjs}'
    ],
    languageOptions: {
      globals: {
        ...globals.mocha
      }
    }
  })
]
