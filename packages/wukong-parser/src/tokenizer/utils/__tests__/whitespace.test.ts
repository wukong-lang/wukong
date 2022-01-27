import { isNewLine } from '../whitespace'

describe('isNewLine', () => {
  it('should return true given line feed', () => {
    expect(isNewLine(10)).toBe(true)
  })

  it('should return true given line feed', () => {
    expect(isNewLine(13)).toBe(true)
  })

  it('should return true given line feed', () => {
    expect(isNewLine(8232)).toBe(true)
  })

  it('should return true given line feed', () => {
    expect(isNewLine(8233)).toBe(true)
  })

  it('should return false given other code', () => {
    expect(isNewLine(626)).toBe(false)
  })
})
