import type {
  Linter
} from 'eslint'

import type {
  RecommendedType
} from './configs/recommended.mjs'

import type {
  StandardType
} from './configs/standard.mjs'

import type {
  StylisticType
} from './configs/stylistic.mjs'

type Config = Linter.Config

declare const configs: {
  recommended: RecommendedType,
  standard: StandardType,
  stylistic: StylisticType
}

type DefaultType = Config[]

export {
  configs
}

export default DefaultType
