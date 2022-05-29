const Basket = require("../models/Basket.model");
const Armchair = require("../models/Armchair.model");
const Sofa = require("../models/Sofa.model");
const { userController } = require("./user.controller");

module.exports.basketController = {
  postArmchairToBasket: async (req, res) => {
    try {
      const { id } = req.body;

      const product = await Armchair.findOne({ _id: id });

      await Basket.findByIdAndUpdate(req.params.id, {
        $addToSet: { basket: product._id },
      });

      const result = await Armchair.findByIdAndUpdate(id, {
        onBasket: true,
      });

      res.json(result);
    } catch (err) {
      res.json(err.toString());
    }
  },
  pulltArmchairFromBasket: async (req, res) => {
    try {
      const { id } = req.body;

      const product = await Armchair.findOne({ _id: id });

      await Basket.findByIdAndUpdate(req.params.id, {
        $pull: { basket: product._id },
      });

      await Armchair.findByIdAndUpdate(id, {
        onBasket: false,
      });

      res.json(product);
    } catch (err) {
      res.json(err.toString());
    }
  },
  postSofa: async (req, res) => {
    try {
      const { id } = req.body;

      const product = await Sofa.findOne({ _id: id });

      const basketa = await Basket.findByIdAndUpdate(req.params.id, {
        $addToSet: { basket: product._id },
      });

      res.json(basketa);
    } catch (err) {
      res.json(err.toString());
    }
  },
  getArmchairs: async (req, res) => {
    try {
      const baskets = await Basket.find({ userBasket: req.user.id }).populate(
        "basket"
      );

      res.json(baskets);
    } catch (err) {
      res.json(err.toString());
    }
  },
};
