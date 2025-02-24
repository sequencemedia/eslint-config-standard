import recommended from '#eslint-config-standard/configs/recommended'
import standard from '#eslint-config-standard/configs/standard'
import stylistic from '#eslint-config-standard/configs/stylistic'

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
