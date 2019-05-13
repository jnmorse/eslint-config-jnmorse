const { LoadConfig, findUnused } = require('eslint-rule-finder')

let config

describe('Rules', () => {
  beforeAll(() => {
    config = new LoadConfig()
  })

  it('should have 0 undefined rules', () => {
    const unused = findUnused(config)

    expect(unused.size).toBe(0)
  })

  it('should have 0 deprecated rules', () => {
    expect(config.deprecated.size).toBe(0)
  })
})
