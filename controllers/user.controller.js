const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/Ures.model");
const Basket = require("../models/Basket.model");
const Liked = require("../models/Liked.model");

module.exports.userController = {
  registerUser: async (req, res) => {
    try {
      const { login, password } = req.body;

      const hash = await bcrypt.hash(
        password,
        Number(process.env.BCRYPT_ROUNDS)
      );

      const userCreated = await User.create({
        login,
        password: hash,
      });

      const user = await User.findOne({ login });

      await Basket.create({
        basketName: `Хозяин корзины: ${user.login}`,
        userBasket: user.id,
      });

      await Liked.create({
        likedName: `Хозяин Лайкнутых продуктов: ${user.login}`,
        userLiked: user.id,
      });

      res.json(userCreated);
    } catch (err) {
      res.json(err.toString());
    }
  },

  loginUser: async (req, res) => {
    try {
      const { login, password } = req.body;
      const user = await User.findOne({ login });
      const basket = await Basket.findOne({ login });

      if (!user) {
        return res.json(null);
      }

      const valid = await bcrypt.compare(password, user.password);

      if (!valid) {
        return res.json(null);
      }

      const payload = {
        id: user._id,
        login: user.login,
      };

      const token = await jwt.sign(payload, process.env.SECRET_KEY, {
        expiresIn: "30d",
      });

      res.json({ token, basket });
    } catch (error) {
      res.json({ error: error.toString() });
    }
  },

  getUser: async (req, res) => {
    try {
      const user = await User.findOne({ login: req.user.login });

      res.json(user);
    } catch (error) {
      res.json(error);
    }
  },
  getBasket: async (req, res) => {
    try {
      const basket = await Basket.findOne({ userBasket: req.user.id }).populate(
        "basket"
      );

      res.json(basket);
    } catch (err) {
      res.json(err.toString());
    }
  },
  getLiked: async (req, res) => {
    try {
      const liked = await Liked.findOne({ userBasket: req.user.id }).populate(
        "likedItems"
      );

      res.json(liked);
    } catch (err) {
      res.json(err.toString());
    }
  },
};
