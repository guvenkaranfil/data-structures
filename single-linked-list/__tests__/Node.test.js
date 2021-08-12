import Node from "../Node";

describe("Single Linked List - Node", () => {
  test("should create node with given value", () => {
    const node = new Node(1);

    expect(node.value).toBe(1);
    expect(node.next).toBe(null);
  });
});
