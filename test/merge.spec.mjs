import {
  expect
} from 'chai'

import STANDARD from '@sequencemedia/eslint-config-standard/config/standard'
import STYLISTIC from '@sequencemedia/eslint-config-standard/config/stylistic'

import merge from '@sequencemedia/eslint-config-standard/merge'

describe('@sequencemedia/eslint-config-standard/merge', () => {
  describe('`merge`', () => it('is a function', () => expect(merge).to.be.a('function')))

  describe('`merge()`', () => {
    describe('Always', () => it('returns an array', () => expect(merge()).to.be.an('array')))

    describe('Merges', () => {
      it('returns an array', () => {
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

        const {
          rules: STYLISTIC_RULES
        } = STYLISTIC

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
            .to.eql([
              {
                name: '@sequencemedia/eslint-config-standard',
                languageOptions: {
                  ecmaVersion: 'latest'
                }
              },
              {
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
              },
              {
                ...STYLISTIC,
                files: MOCK_FILES,
                ignores: MOCK_IGNORES,
                languageOptions: MOCK_LANGUAGE_OPTIONS,
                linterOptions: MOCK_LINTER_OPTIONS,
                rules: {
                  ...STYLISTIC_RULES,
                  ...MOCK_RULES
                },
                settings: MOCK_SETTINGS
              }])
        )
      })
    })
  })
})
