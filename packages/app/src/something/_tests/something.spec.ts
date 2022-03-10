import Todo from "entity/todo";
import { something } from "..";

test("Something returns text", () => {
  const returned = something();
  const todo = new Todo();

  expect(returned).toBe("something");
})
