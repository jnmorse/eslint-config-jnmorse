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
    const { currentRules, rules } = config

    const deprecated = []

    currentRules.forEach((value, rule) => {
      const definition = rules.get(rule)

      if (definition.meta && definition.meta.deprecated) {
        deprecated.push(rule)
      }
    })

    expect(deprecated).toHaveLength(0)
  })
})
