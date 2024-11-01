import standard from '#eslint-config-standard/config/standard'
import stylistic from '#eslint-config-standard/config/stylistic'

export default [
  {
    name: '@sequencemedia/eslint-config-standard',
    languageOptions: {
      ecmaVersion: 'latest'
    }
  },
  standard,
  stylistic
]
