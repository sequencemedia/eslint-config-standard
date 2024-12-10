import {
  expect
} from 'chai'

import eslintConfig from '@sequencemedia/eslint-config-standard'

import merge from '@sequencemedia/eslint-config-standard/merge'

describe('@sequencemedia/eslint-config-standard/merge', () => {
  describe('`merge`', () => it('is a function', () => expect(merge).to.be.a('function')))

  describe('`merge()`', () => {
    describe('Always', () => it('returns an array', () => expect(merge()).to.be.an('array')))

    describe('Merges', () => {
      const [
        DEFAULT,
        STANDARD,
        STYLISTIC
      ] = eslintConfig

      it('returns an array', () => {
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

        const {
          languageOptions: STYLISTIC_LANGUAGE_OPTIONS,
          linterOptions: STYLISTIC_LINTER_OPTIONS,
          plugins: STYLISTIC_PLUGINS,
          rules: STYLISTIC_RULES,
          settings: STYLISTIC_SETTINGS
        } = STYLISTIC

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
            .to.eql([
              DEFAULT,
              {
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
              },
              {
                ...STYLISTIC,
                files: MOCK_FILES,
                ignores: MOCK_IGNORES,
                languageOptions: {
                  ...STYLISTIC_LANGUAGE_OPTIONS,
                  ...MOCK_LANGUAGE_OPTIONS
                },
                linterOptions: {
                  ...STYLISTIC_LINTER_OPTIONS,
                  ...MOCK_LINTER_OPTIONS
                },
                plugins: {
                  ...STYLISTIC_PLUGINS,
                  ...MOCK_PLUGINS
                },
                rules: {
                  ...STYLISTIC_RULES,
                  ...MOCK_RULES
                },
                settings: {
                  ...STYLISTIC_SETTINGS,
                  ...MOCK_SETTINGS
                }
              }
            ])
        )
      })
    })
  })
})
