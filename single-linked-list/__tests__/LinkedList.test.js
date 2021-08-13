import LinkedList from "../LinkedList";

describe("Single LinkedList", () => {
  test("should create empty linked list", () => {
    const list = new LinkedList();

    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
  });
});
