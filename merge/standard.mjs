import merge from '@sequencemedia/eslint-merge'

import CONFIG from '#eslint-config-standard/configs/standard'

export default function mergeConfig (config) {
  return (
    merge(
      CONFIG,
      config
    )
  )
}
