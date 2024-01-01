import productSchema from "../utils/validator/product-validator.js";

class ProductService {
  constructor(repo) {
    this.repo = repo;
  }
  addProduct = (req) => {
    const { error } = productSchema.validate(req, {
      abortEarly: true,
    });
    if (error) throw new Error(error);

    return this.repo.add(req);
  };

  getProduct = () => {
    return this.repo.get();
  };

  updateProduct = async (req, id) => {
    const matched = await this.repo.getByID(id);
    if (!matched) throw new Error("id not found");
    const { error } = productSchema.validate(req, {
      abortEarly: true,
    });
    if (error) throw new Error(error);

    return this.repo.update(req, id);
  };

  deleteProduct = (id) => {
    return this.repo.delete(id);
  };
}

export default ProductService;
