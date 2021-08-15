import LinkedList from "../LinkedList";

describe("Single LinkedList", () => {
  test("should create empty linked list", () => {
    const list = new LinkedList();

    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
  });

  test("should append new element to the empty list", () => {
    const list = new LinkedList();

    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();

    list.append(3);

    expect(list.head.value).toBe(3);
    expect(list.tail.value).toBe(3);
  });

  test("should append new element to the non-empty list", () => {
    const list = new LinkedList();
    list.fromArray([1, 2, 3, 4]);

    expect(list.toString()).toBe("1,2,3,4");
  });

  test("should prepend new element to the list", () => {
    const list = new LinkedList();
    list.prepend(3);

    expect(list.head.value).toBe(3);
    expect(list.tail.value).toBe(3);

    list.append(1);
    list.prepend(2);

    expect(list.toString()).toBe("2,3,1");
  });

  test("should not delete value from a empty linked list. Method should return null", () => {
    const list = new LinkedList();

    const deletedNode = list.delete(3);

    expect(deletedNode).toBeNull();
  });

  test("should delete value from the list including head", () => {
    const list = new LinkedList();
    list.append(3);
    list.append(2);
    list.append(1);
    list.append(3);

    const deletedNode = list.delete(3);

    expect(deletedNode.value).toBe(3);
    expect(list.toString()).toBe("2,1");
  });

  test("should delete value from the list including tail", () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.append(4);

    const deletedNode = list.delete(4);

    expect(deletedNode.value).toBe(4);
    expect(list.tail.value).toBe(3);
    expect(list.toString()).toBe("1,2,3");
  });
});
