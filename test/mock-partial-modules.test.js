import { getProductById, getAllProducts } from "../src/database.js";
import { ProductService } from "../src/product-service.js";

jest.mock("../src/database.js", () => {
  const originalModule = jest.requireActual("../src/database.js");

  return {
    __esModule: true,
    ...originalModule,
    getAllProducts: jest.fn(),
    // getProductById: jest.fn(),
  };
});
test.failing("mock modules getProductById", () => {
  //   getProductById.mockImplementation((id) => {
  //     return { id: id, name: "Product Mock" };
  //   });

  product = ProductService.findById(1);
  //   expect(product).toEqual({ id: 1, name: "Product Mock" });
});

test("mock modules getAllProducts", () => {
  const products = [
    { id: 1, name: "Product Mock 1" },
    { id: 2, name: "Product Mock 2" },
  ];
  getAllProducts.mockReturnValue(products);
  expect(ProductService.findAll()).toEqual(products);
});
