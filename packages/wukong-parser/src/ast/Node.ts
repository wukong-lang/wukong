export enum NodeType {}
export default class Node {
  type: NodeType
  location: Location | null

  constructor(type: NodeType)
  constructor(type: NodeType, location: Location)
  constructor(type: NodeType, location?: Location) {
    this.type = type
    this.location = location ?? null
  }
}
