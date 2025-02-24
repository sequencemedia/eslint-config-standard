import type {
  Linter
} from 'eslint'

import type {
  RecommendedConfig
} from './configs/recommended.mjs'

import type {
  StandardConfig
} from './configs/standard.mjs'

import type {
  StylisticConfig
}  from './configs/stylistic.mjs'

declare const configs: {
  recommended: RecommendedConfig,
  standard: StandardConfig,
  stylistic: StylisticConfig
}

export {
  configs
}

declare const config: Linter.Config[]

export default config
