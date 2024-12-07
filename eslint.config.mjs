import globals from 'globals'
import {
  configs
} from './index.mjs'

export default [
  {
    ...configs.recommended,
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
  },
  {
    ...configs.recommended,
    files: [
      'test/**/*.{mjs,cjs}'
    ],
    languageOptions: {
      globals: {
        ...globals.mocha
      }
    }
  }
]
