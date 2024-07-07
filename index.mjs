import standard from './config/standard.mjs'
import stylistic from './config/stylistic.mjs'

export default [
  {
    name: '@sequencemedia/eslint-config-standard',
    files: [
      '**/*.{mjs,cjs}'
    ],
    languageOptions: {
      ecmaVersion: 'latest'
    }
  },
  standard,
  stylistic
]
