import standard from './standard.mjs'
import stylistic from './stylistic.mjs'

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
