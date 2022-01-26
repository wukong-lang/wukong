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
    it('should skip spaces', () => {
      const data = {
        ...MOCK_DATA,
        input: `${String.fromCodePoint(32, 32, 32, 32)}token`,
      }

      const result = skipSpace(data)

      expect(result).toEqual({ ...data, state: { position: 4 } })
    })

    it('should skip non breaking spaces', () => {
      const data = {
        ...MOCK_DATA,
        input: `${String.fromCodePoint(160, 160)}token`,
      }

      const result = skipSpace(data)

      expect(result).toEqual({ ...data, state: { position: 2 } })
    })

    it('should skip tabs', () => {
      const data = {
        ...MOCK_DATA,
        input: `${String.fromCodePoint(9, 9, 9)}token`,
      }

      const result = skipSpace(data)

      expect(result).toEqual({ ...data, state: { position: 3 } })
    })
  })

  describe('breaking space', () => {
    it('should skip carriage return followed by line feed', () => {
      const data = {
        ...MOCK_DATA,
        input: `${String.fromCodePoint(13, 10)}token`,
      }

      const result = skipSpace(data)

      expect(result).toEqual({ ...data, state: { position: 2 } })
    })

    it('should skip line feed', () => {
      const data = {
        ...MOCK_DATA,
        input: `${String.fromCodePoint(10, 10)}token`,
      }

      const result = skipSpace(data)

      expect(result).toEqual({ ...data, state: { position: 2 } })
    })

    it('should skip line separator', () => {
      const data = {
        ...MOCK_DATA,
        input: `${String.fromCodePoint(8232)}token`,
      }

      const result = skipSpace(data)

      expect(result).toEqual({ ...data, state: { position: 1 } })
    })

    it('should skip paragraph separator', () => {
      const data = {
        ...MOCK_DATA,
        input: `${String.fromCodePoint(8233)}token`,
      }

      const result = skipSpace(data)

      expect(result).toEqual({ ...data, state: { position: 1 } })
    })
  })
})
