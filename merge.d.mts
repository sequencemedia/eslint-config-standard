import type {
  Linter
} from 'eslint'

type Config = Linter.Config

export default function mergeESLintConfigWith (config: Config): Config[]
