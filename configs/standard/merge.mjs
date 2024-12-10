import merge from '@sequencemedia/eslint-merge'

import eslintConfig from '#eslint-config-standard/configs/standard'

export default function mergeESLintConfigWith (config) {
  return (
    merge(eslintConfig, config)
  )
}
