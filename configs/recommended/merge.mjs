import merge from '@sequencemedia/eslint-merge'

import eslintConfig from '#eslint-config-standard/configs/recommended'

export default function mergeESLintConfigWith (config) {
  return (
    merge(eslintConfig, config)
  )
}
