import Position from './Position'

export default class Location {
  source: string | null
  start: Position
  end: Position

  constructor(start: Position, end: Position)
  constructor(start: Position, end: Position, source: string)
  constructor(start: Position, end: Position, source?: string) {
    this.start = start
    this.end = end
    this.source = source ?? null
  }
}
