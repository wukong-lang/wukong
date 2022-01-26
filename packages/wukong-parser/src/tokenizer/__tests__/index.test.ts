import { Data, skipSpace } from '..'

const MOCK_DATA: Data = {
  state: { position: 0 },
  options: {
    attachComment: false,
    inModule: false,
  },
  input: '',
  output: {
    comments: [],
  },
}

describe('skipSpace', () => {
  describe('non breaking space', () => {
    it('should skip leading spaces', () => {
      const data = {
        ...MOCK_DATA,
        input: `${String.fromCodePoint(32, 32, 32, 32)}token`,
      }

      const result = skipSpace(data)

      expect(result).toEqual({ ...data, state: { position: 4 } })
    })

    it('should skip leading non breaking spaces', () => {
      const data = {
        ...MOCK_DATA,
        input: `${String.fromCodePoint(160, 160)}token`,
      }

      const result = skipSpace(data)

      expect(result).toEqual({ ...data, state: { position: 2 } })
    })

    it('should skip leading tabs', () => {
      const data = {
        ...MOCK_DATA,
        input: `${String.fromCodePoint(9, 9, 9)}token`,
      }

      const result = skipSpace(data)

      expect(result).toEqual({ ...data, state: { position: 3 } })
    })
  })
})
