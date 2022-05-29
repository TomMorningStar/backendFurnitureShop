const mongoose = require("mongoose");

const basketSchema = mongoose.Schema({
  basketName: String,

  userBasket: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  basket: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Armchair",
    },
    {
      type: mongoose.Types.ObjectId,
      ref: "Sofa",
    },
  ],
});

const Basket = mongoose.model("Basket", basketSchema);

module.exports = Basket;
