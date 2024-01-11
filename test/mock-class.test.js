import { UserRepository } from "../src/user-repository.js";
import { UserService } from "../src/user-service.js";

jest.mock("../src/user-repository.js");

const repository = new UserRepository();
const service = new UserService(repository);

test("test mock class save", () => {
  const user = { id: 1, name: "Anita" };
  service.save(user);
  expect(repository.save).toHaveBeenCalled();
});

test("test mock class findById", () => {
  const user = { id: 1, name: "Anita" };
  repository.findById.mockReturnValueOnce(user);
  expect(service.findById(1)).toEqual(user);
  expect(repository.findById).toHaveBeenCalled();
  expect(repository.findById).toHaveBeenCalledWith(1);
});

test("test mock class findAll", () => {
  const users = [
    { id: 1, name: "Anita" },
    { id: 2, name: "Silvi" },
  ];
  repository.findAll.mockReturnValueOnce(users);
  expect(service.findAll()).toEqual(users);
  expect(repository.findAll).toHaveBeenCalled();
});
