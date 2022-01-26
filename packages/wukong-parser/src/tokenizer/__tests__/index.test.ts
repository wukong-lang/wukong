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
  it('should skip leading space', () => {
    const data = { ...MOCK_DATA, input: '   token' }

    const result = skipSpace(data)

    expect(result).toEqual({
      state: { position: 3 },
      options: {
        attachComment: false,
        inModule: false,
      },
      input: '   token',
      output: {
        comments: [],
      },
    })
  })
})
