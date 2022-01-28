export enum TokenType {}

export class Token {
  type: TokenType
  value: string
  location: Location

  constructor(type: TokenType, value: string, location: Location) {
    this.type = type
    this.value = value
    this.location = location
  }
}
