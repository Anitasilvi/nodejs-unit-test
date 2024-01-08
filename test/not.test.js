test("string.not", () => {
  const name = "Anita Silvi Ferdina";
  expect(name).not.toBe("Anita");
  expect(name).not.toEqual("Anita");
  expect(name).not.toMatch(/anita/);
});

test("numbers.not", () => {
  const value = 2 + 2;
  expect(value).not.toBeGreaterThan(6);
  expect(value).not.toBeLessThan(2);
  expect(value).not.toBe(10);
});
