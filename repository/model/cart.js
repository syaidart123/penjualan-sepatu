import mongoose from "mongoose";

const schemaCart = new mongoose.Schema({
  productID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: {
    type: Number,
    default: 1,
    min: 0,
  },
});

const Cart = new mongoose.model("Cart", schemaCart);

export default Cart;
