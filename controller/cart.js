class CartController {
  constructor(svc) {
    this.svc = svc;
  }
  addToCart = async (req, res) => {
    await this.svc.addToCart(req.body);
    res.status(201).json({
      status: "success",
    });
  };
}

export default CartController;
