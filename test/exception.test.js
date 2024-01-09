import { MyException, callMe } from "../src/exception";

test("exception", () => {
  expect(() => callMe("Anita")).toThrow();
  expect(() => callMe("Anita")).toThrow(MyException);
  expect(() => callMe("Anita")).toThrow("Ups my exception happen");
});

test("exception not happens", () => {
  expect(callMe("Budi")).toBe("OK");
});
