import Node from "./Node";

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  prepend(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;

    return this;
  }

  delete() {
    if (!this.head) {
      return null;
    }
  }

  fromArray(values) {
    values.forEach((value) => this.append(value));
  }

  toArray() {
    const nodes = [];

    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);

      currentNode = currentNode.next;
    }

    return nodes;
  }

  toString() {
    return this.toArray()
      .map((node) => node.value)
      .toString();
  }
}
