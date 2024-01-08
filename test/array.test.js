test("array", () => {
  const names = ["Anita", "Silvi"];
  expect(names).toContain("Silvi");
  expect(names).toEqual(["Anita", "Silvi"]);
});

test("array object", () => {
  const persons = [{ name: "Anita" }, { name: "Silvi" }];
  expect(persons).toContainEqual({ name: "Silvi" });
  expect(persons).toEqual([{ name: "Anita" }, { name: "Silvi" }]);
});
