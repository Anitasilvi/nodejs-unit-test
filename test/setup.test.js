import { sum } from "../src/sum.js";

beforeEach(() => {
  console.info("Before Each");
});

afterEach(() => {
  console.info("After Each");
});

beforeAll(async () => {
  console.info("Before All");
});

afterAll(async () => {
  console.info("After All");
});

test("first test", () => {
  expect(sum(10, 10)).toBe(20);
  console.info("First Test");
});

test("second test", () => {
  expect(sum(10, 10)).toBe(20);
  console.info("Second Test");
});
