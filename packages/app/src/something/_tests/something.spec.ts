import { something } from "../index"

test("Something returns text", () => {
  const returned = something();

  expect(returned).toBe("something");
})
