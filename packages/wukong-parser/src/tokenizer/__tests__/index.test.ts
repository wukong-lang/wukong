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
  it('should skip leading spaces', () => {
    const data = { ...MOCK_DATA, input: '   token' }

    const result = skipSpace(data)

    expect(result).toEqual({ ...data, state: { position: 3 } })
  })

  it('should skip leading non breaking spaces', () => {
    const data = {
      ...MOCK_DATA,
      input: `${String.fromCodePoint(160, 160)}token`,
    }

    const result = skipSpace(data)

    expect(result).toEqual({ ...data, state: { position: 2 } })
  })
})
