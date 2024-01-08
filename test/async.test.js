import { sayHelloAsync } from "../src/async";

test("test async function", async () => {
  const result = await sayHelloAsync("Anita");
  expect(result).toBe("Hello Anita");
});

test("test async matchers", async () => {
  await expect(sayHelloAsync("Anita")).resolves.toBe("Hello Anita");
  await expect(sayHelloAsync()).rejects.toBe("Name is empty");
});
