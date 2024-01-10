import { sayHello } from "../src/sayHello.js";

test("sayHello success", () => {
  expect(sayHello("Anita")).toBe("Hello Anita");
});

test("sayHello error matchers", () => {
  expect(() => sayHello(null)).toThrow();
});
