import { Char } from '../../strings/Char'
import { equal } from './fp'

const NEW_LINE_SEPERATARS = [
  Char.LineFeed,
  Char.CarriageReturn,
  Char.LineSeparator,
  Char.ParagraphSeparator,
]

// https://tc39.github.io/ecma262/#sec-line-terminators
export const isNewLine = (char: number): boolean =>
  NEW_LINE_SEPERATARS.some(equal(char))
