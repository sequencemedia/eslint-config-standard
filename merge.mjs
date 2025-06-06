/**
 *  @typedef {import('eslint').Linter.Config} Config
 */
import getMapMerge from '@sequencemedia/eslint-merge/get-map-merge'
import eslintConfig from './index.mjs'

/**
 *  @param {Config} config
 *  @returns {boolean}
 */
function include ({ name }) {
  return name === '@sequencemedia/eslint-config-standard'
}

/**
 *  @param {Config} config
 *  @returns {boolean}
 */
function exclude ({ name }) {
  return name !== '@sequencemedia/eslint-config-standard'
}

/**
 *  @param {Config} config
 *  @returns {Config[]}
 */
export default function mergeESLintConfigWith (config) {
  return (
    eslintConfig
      .filter(include)
      .concat(
        eslintConfig
          .filter(exclude)
          .map(getMapMerge(config))
      )
  )
}
