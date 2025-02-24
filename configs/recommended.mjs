import standard from '#eslint-config-standard/configs/standard'
import stylistic from '#eslint-config-standard/configs/stylistic'

export default {
  name: '@sequencemedia/eslint-config-standard/recommended',
  languageOptions: {
    ecmaVersion: 'latest'
  },
  files: [
    '**/*.{js,mjs,cjs}'
  ],
  plugins: {
    ...standard.plugins,
    ...stylistic.plugins
  },
  rules: {
    ...standard.rules,
    ...stylistic.rules
  }
}
