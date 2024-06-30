import standard from './config/standard.mjs'
import stylistic from './config/stylistic.mjs'

export default [
  {
    name: '@sequencemedia/eslint-config-standard',
    languageOptions: {
      ecmaVersion: 'latest'
    },
    files: [
      '**/*.{mjs,cjs}'
    ]
  },
  standard,
  stylistic
]
