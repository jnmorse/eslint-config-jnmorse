const { LoadConfig, findUnused } = require('eslint-rule-finder')
const { assert } = require('chai')

let config

describe('Rules', () => {
  before(() => {
    config = new LoadConfig()
  })

  it('should have 0 undefined rules', () => {
    const unused = findUnused(config)

    assert.isEmpty(unused)
  })

  it('should have 0 deprecated rules', () => {
    assert.isEmpty(config.deprecated)
  })
})
