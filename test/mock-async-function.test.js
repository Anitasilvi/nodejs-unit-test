import { getBalance } from "../src/async.js";

test("mock async function ", async () => {
  const from = jest.fn().mockResolvedValueOnce(1000);
  await expect(getBalance("Anita", from)).resolves.toEqual({
    name: "Anita",
    balance: 1000,
  });

  await expect(from.mock.calls.length).toBe(1);
  await expect(from.mock.results[0].value).resolves.toBe(1000);
});

test.failing("mock async function rejected", async () => {
  const from = jest.fn().mockRejectedValueOnce(new Error("Ups"));

  await getBalance("Anita", from);
});

test("mock async function error matchers", async () => {
  const from = jest.fn().mockRejectedValueOnce("Rejected");
  await expect(getBalance("Anita", from)).rejects.toBe("Rejected");
});
