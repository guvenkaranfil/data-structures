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
});
