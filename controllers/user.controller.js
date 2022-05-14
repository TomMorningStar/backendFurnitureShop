const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/Ures.model");

module.exports.userController = {
  registerUser: async (req, res) => {
    try {
      const { name, login, password } = req.body;
      const hash = await bcrypt.hash(
        password,
        Number(process.env.BCRYPT_ROUNDS)
      );
      const user = await User.create({
        name,
        login,
        password: hash,
      });
      res.json(user);
    } catch (err) {
      res.json(err.toString());
    }
  },
  // eslint-disable-next-line consistent-return
  loginUser: async (req, res) => {
    try {
      const { login, password } = req.body;
      const user = await User.findOne({ login });

      if (!login) {
        return res.json("Неправильный логин или пароль");
      }
      const valid = await bcrypt.compare(password, user.password);
      if (!valid) {
        return res.json("Неправильный логин или пароль");
      }
      const payload = {
        id: user._id,
        name: user.name,
      };
      const token = await jwt.sign(payload, "10", {
        expiresIn: "30d",
      });

      res.json(token);
    } catch (err) {
      res.json(err.toString());
    }
  },

  getUser: async (req, res) => {
    try {
      const user = await User.findOne({ name: req.user.name });
      res.json(user);
    } catch (error) {
      res.json(error);
    }
  },
};
