export enum NodeType {}

export default class Node {
  type: NodeType

  constructor(type: NodeType) {
    this.type = type
  }
}
