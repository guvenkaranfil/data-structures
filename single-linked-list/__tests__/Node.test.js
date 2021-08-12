import Node from "../Node";

describe("Single Linked List - Node", () => {
  test("should create node with given value", () => {
    const node = new Node(1);

    expect(node.value).toBe(1);
    expect(node.next).toBe(null);
  });

  test("should links given node to the previos one", () => {
    const node2 = new Node(2);
    const node1 = new Node(1, node2);

    expect(node1.value).toBe(1);
    expect(node1.next).toBe(node2);
    expect(node1.next.value).toBe(node2.value);
  });
});
