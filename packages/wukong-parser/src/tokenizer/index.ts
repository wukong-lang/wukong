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
    comments: []
  }
}

const isSpace = (char: number) =>
  char === Char.Space || char === Char.NonBreakingSpace

export const skipSpace = ({
  input,
  state,
  options,
  output: { comments, ...rest },
}: Data): Data => {
  let current = state.position
  let char = input.charCodeAt(current)

  while (current < input.length && isSpace(char)) {
    current += 1

    char = input.charCodeAt(current)
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
