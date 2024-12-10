import {
  expect
} from 'chai'

import STANDARD from '@sequencemedia/eslint-config-standard/configs/standard'

import merge from '@sequencemedia/eslint-config-standard/configs/standard/merge'

describe('@sequencemedia/eslint-config-standard/configs/standard/merge', () => {
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
        const MOCK_LANGUAGE_OPTIONS = {
          mockOption: 'MOCK LANGUAGE OPTIONS'
        }
        const MOCK_LINTER_OPTIONS = {
          mockOption: 'MOCK LINTER OPTIONS'
        }
        const MOCK_PLUGINS = {
          mockOption: 'MOCK PLUGINS'
        }
        const MOCK_RULES = {
          mockOption: 'MOCK RULES'
        }
        const MOCK_SETTINGS = {
          mockOption: 'MOCK SETTINGS'
        }

        const {
          languageOptions: STANDARD_LANGUAGE_OPTIONS,
          linterOptions: STANDARD_LINTER_OPTIONS,
          plugins: STANDARD_PLUGINS,
          rules: STANDARD_RULES,
          settings: STANDARD_SETTINGS
        } = STANDARD

        return (
          expect(
            merge({
              files: MOCK_FILES,
              ignores: MOCK_IGNORES,
              languageOptions: MOCK_LANGUAGE_OPTIONS,
              linterOptions: MOCK_LINTER_OPTIONS,
              plugins: MOCK_PLUGINS,
              rules: MOCK_RULES,
              settings: MOCK_SETTINGS
            })
          )
            .to.eql({
              ...STANDARD,
              files: MOCK_FILES,
              ignores: MOCK_IGNORES,
              languageOptions: {
                ...STANDARD_LANGUAGE_OPTIONS,
                ...MOCK_LANGUAGE_OPTIONS
              },
              linterOptions: {
                ...STANDARD_LINTER_OPTIONS,
                ...MOCK_LINTER_OPTIONS
              },
              plugins: {
                ...STANDARD_PLUGINS,
                ...MOCK_PLUGINS
              },
              rules: {
                ...STANDARD_RULES,
                ...MOCK_RULES
              },
              settings: {
                ...STANDARD_SETTINGS,
                ...MOCK_SETTINGS
              }
            })
        )
      })
    })
  })
})
