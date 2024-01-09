beforeEach(() => console.info("Before Each 1"));
afterEach(() => console.info("After Each 1"));

describe("inner scope", () => {
  beforeEach(() => console.info("Inner Before Each 1"));
  afterEach(() => console.info("Inner After Each 1"));

  describe("inner scope", () => {
    beforeEach(() => console.info("Inner Before Each 1"));
    afterEach(() => console.info("Inner After Each 1"));

    test("test 1", () => console.info("Test 1"));
    test("test 2", () => console.info("Test 2"));
  });
});
