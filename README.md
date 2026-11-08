# `@sequencemedia/eslint-config-standard`

Standard style Flat Config for ESLint `v9` and `v10`

Based on [Standard](https://github.com/standard/eslint-config-standard) via [neostandard](https://github.com/neostandard/neostandard)

## Requirements

- ESLint `^9.38.0 || ^10.0.0`
- Node.js `^20.19.0 || ^22.13.0 || >=24`

## Install

```shell
npm i -D @sequencemedia/eslint-config-standard
```

## Use

In your `eslint.config.*` either:

```javascript
export { default } from '@sequencemedia/eslint-config-standard'
```

Or:

```javascript
import { configs } from '@sequencemedia/eslint-config-standard'

export default [
  configs.recommended
]
```

You can merge _changes_ in the default configuration using the `merge` utility:

```javascript
import merge from '@sequencemedia/eslint-config-standard/configs/recommended/merge'

export default (
  merge({
    files: [
      '**/*.{mjs,cjs}'
    ],
    ignores: [
      'lib'
    ]
  })
)
```

Which is _equivalent to_:

```javascript
import { configs } from '@sequencemedia/eslint-config-standard'

export default [
  {
    ...configs.recommended,
    files: [
      '**/*.{mjs,cjs}'
    ],
    ignores: [
      'lib'
    ]
  }
]
```
