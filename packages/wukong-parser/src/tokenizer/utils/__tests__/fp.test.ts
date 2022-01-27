import { equal } from '../fp'

describe('equal', () => {
  it('should retuan a equal function', () => {
    const eqaultTo2 = equal(2)

    expect(eqaultTo2(2)).toBe(true)
  })
})
