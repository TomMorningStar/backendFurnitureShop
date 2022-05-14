const Type = require("../models/Type.model");

module.exports.typeController = {
  postType: async (req, res) => {
    try {
      const { name } = req.body;

      const typeInfo = await Type.create({
        name,
      });
      res.json(`Добавлена категория: ${typeInfo}`);
    } catch (err) {
      res.json(err.toString());
    }
  },
  getTypes: async (req, res) => {
    try {
      const types = await Type.find();
      res.json(types);
    } catch (err) {
      res.json(err.toString());
    }
  },
};
