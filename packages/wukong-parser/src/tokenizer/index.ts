import { Char } from '../strings/Char'

type State = {
  position: number
}

type Options = {
  attachComment: boolean
  inModule: boolean
}

export type Data = {
  state: State
  options: Options
  input: string
  output: {
    comments: string[]
  }
}

const isSpace = (char: number) =>
  char === Char.Space || char === Char.NonBreakingSpace || char === Char.Tab

const isBreakingSpace = (char: number) =>
  char === Char.LineFeed ||
  char === Char.LineSeparator ||
  char === Char.ParagraphSeparator

export const skipSpace = ({
  input,
  state,
  options,
  output: { comments, ...rest },
}: Data): Data => {
  let current = state.position

  while (current < input.length) {
    const char = input.charCodeAt(current)

    if (isSpace(char)) {
      current += 1
      continue
    }

    if (
      char === Char.CarriageReturn &&
      input.charCodeAt(current + 1) === Char.LineFeed
    ) {
      current += 2
      continue
    }

    if (isBreakingSpace(char)) {
      current += 1
      continue
    }

    break
  }

  return {
    input,
    state: {
      ...state,
      position: current,
    },
    options,
    output: {
      ...rest,
      comments,
    },
  }
}

export const skipBlockComment = ({
  input,
  state,
  output,
  ...rest
}: Data): Data => {
  const start = input.indexOf('/*', state.position)
  const end = input.indexOf('*/', start + '/*'.length)
  output.comments.push(input.substring(start + '/*'.length, end))

  return { ...rest, state: { position: end + '*/'.length }, input, output }
}
