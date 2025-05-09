/**
 *  @typedef {import('eslint').Linter.Config} Config
 */

import merge from '@sequencemedia/eslint-merge'

import eslintConfig from '#eslint-config-standard/configs/standard'

/**
 *  @param {Config} config
 *  @returns {Config}
 */
export default function mergeESLintConfigWith (config) {
  return (
    merge(eslintConfig, config)
  )
}
