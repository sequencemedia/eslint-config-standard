import recommended from './configs/recommended.mjs'
import standard from './configs/standard.mjs'
import stylistic from './configs/stylistic.mjs'

export const configs = {
  recommended,
  standard,
  stylistic
}

export default [
  {
    name: '@sequencemedia/eslint-config-standard',
    languageOptions: {
      ecmaVersion: 'latest'
    },
    files: [
      '**/*.{js,mjs,cjs}'
    ]
  },
  standard,
  stylistic
]
