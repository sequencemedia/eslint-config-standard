import {
  expect
} from 'chai'

import STANDARD from '#eslint-config-standard/config/standard'

import merge from '#eslint-config-standard/merge/standard'

describe('#eslint-config-standard/merge/standard', () => {
  describe('`merge`', () => it('is a function', () => expect(merge).to.be.a('function')))

  describe('`merge()`', () => {
    describe('Always', () => it('returns an object', () => expect(merge()).to.be.an('object')))

    describe('Merges', () => {
      it('returns an object', () => {
        const MOCK_FILES = [
          'MOCK FILES'
        ]
        const MOCK_IGNORES = [
          'MOCK IGNORES'
        ]
        const MOCK_LANGUAGE_OPTIONS = { mockOption: 'MOCK LANGUAGE OPTIONS' }
        const MOCK_LINTER_OPTIONS = { mockOption: 'MOCK LINTER OPTIONS' }
        const MOCK_RULES = { mockOption: 'MOCK RULES' }
        const MOCK_SETTINGS = { mockOption: 'MOCK SETTINGS' }

        const {
          rules: STANDARD_RULES
        } = STANDARD

        return (
          expect(
            merge({
              files: MOCK_FILES,
              ignores: MOCK_IGNORES,
              languageOptions: MOCK_LANGUAGE_OPTIONS,
              linterOptions: MOCK_LINTER_OPTIONS,
              rules: MOCK_RULES,
              settings: MOCK_SETTINGS
            })
          )
            .to.eql({
              ...STANDARD,
              files: MOCK_FILES,
              ignores: MOCK_IGNORES,
              languageOptions: MOCK_LANGUAGE_OPTIONS,
              linterOptions: MOCK_LINTER_OPTIONS,
              rules: {
                ...STANDARD_RULES,
                ...MOCK_RULES
              },
              settings: MOCK_SETTINGS
            })
        )
      })
    })
  })
})