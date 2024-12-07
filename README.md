# `@sequencemedia/eslint-config-standard`

Standard style Flat Config for ESLint `v9`

Based on [Standard](https://github.com/standard/eslint-config-standard) via [neostandard](https://github.com/neostandard/neostandard)

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
import merge from '@sequencemedia/eslint-config-standard/merge'

export default merge({
  files: [
    '**/*.{mjs,cjs}'
  ],
  ignores: [
    'lib'
  ]
})
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
