import schemaCart from "../utils/validator/cart-validator.js";
import BaseError from "../utils/error/error.js";
class CartService {
  constructor(repo) {
    this.repo = repo;
  }

  addToCart = (reqCart) => {
    const { error } = schemaCart.validate(reqCart, {
      abortEarly: true,
    });
    if (error) throw new BaseError(error);

    this.repo.add(reqCart);
  };
}

export default CartService;
