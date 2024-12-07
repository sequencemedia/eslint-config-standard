import {
  expect
} from 'chai'

import {
  recommended,
  standard,
  stylistic
} from '@sequencemedia/eslint-config-standard/config'

describe('@sequencemedia/eslint-config-standard/config', () => {
  describe('`recommended`', () => it('is an object', () => expect(recommended).to.be.an('object')))

  describe('`standard`', () => it('is an object', () => expect(standard).to.be.an('object')))

  describe('`stylistic`', () => it('is an object', () => expect(stylistic).to.be.an('object')))
})
