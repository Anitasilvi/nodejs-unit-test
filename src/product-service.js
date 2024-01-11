import { getAllProducts, getProductById } from "../src/database.js";

export class ProductService {
  static findById(id) {
    return getProductById(id);
  }
  static findAll() {
    return getAllProducts();
  }
}
