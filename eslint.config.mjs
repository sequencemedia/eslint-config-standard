import globals from 'globals'
import merge from './merge.mjs'

export default [
  ...merge({
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
      'test/**/*.mjs'
    ],
    languageOptions: {
      globals: {
        ...globals.mocha
      }
    }
  })
]
