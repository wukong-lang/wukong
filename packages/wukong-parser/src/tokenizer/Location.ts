export class Location {
  start: number
  end: number
  source?: string

  constructor(start: number, end: number)
  constructor(start: number, end: number, source: string)
  constructor(start: number, end: number, source?: string) {
    this.start = start
    this.end = end
    this.source = source
  }
}
