test("string", () => {
  const name = "Anita Silvi";

  expect(name).toBe("Anita Silvi");
  expect(name).toEqual("Anita Silvi");
  expect(name).toMatch(/Anita/);
});
