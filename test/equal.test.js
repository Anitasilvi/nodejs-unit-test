test("test toBe", () => {
  let name = "Anita";
  let hello = `Hello ${name}`;

  expect(hello).toBe("Hello Anita");
});

test("test toEquals", () => {
  let person = { id: "anita" };
  Object.assign(person, { name: "Anita" });

  expect(person).toEqual({ id: "anita", name: "Anita" });
});
