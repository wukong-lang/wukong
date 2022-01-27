import { Char } from '../../strings/Char'
import { equal } from './fp'

const NEW_LINE_SEPERATARS = [
  Char.LineFeed,
  Char.CarriageReturn,
  Char.LineSeparator,
  Char.ParagraphSeparator,
]

// https://tc39.github.io/ecma262/#sec-line-terminators
export function isNewLine(char: number): boolean {
  const equalToInput = equal(char)
  return NEW_LINE_SEPERATARS.some(equalToInput)
}
