const Liked = require("../models/Liked.model");
const Armchair = require("../models/Armchair.model");

module.exports.likedController = {
  postArmchairToLiked: async (req, res) => {
    try {
      const { id } = req.body;

      const product = await Armchair.findOne({ _id: id });

      await Liked.findByIdAndUpdate(req.params.id, {
        $addToSet: { likedItems: product._id },
      });

      const result = await Armchair.findByIdAndUpdate(id, {
        liked: true,
      });

      res.json(result);
    } catch (err) {
      res.json(err.toString());
    }
  },
  pullArmchairFromLiked: async (req, res) => {
    try {
      const { id } = req.body;

      const product = await Armchair.findOne({ _id: id });

      await Liked.findByIdAndUpdate(req.params.id, {
        $pull: { likedItems: product._id },
      });

      const result = await Armchair.findByIdAndUpdate(id, {
        liked: false,
      });

      res.json(result);
    } catch (err) {
      res.json(err.toString());
    }
  },
  getArmchairs: async (req, res) => {
    try {
      const liketItems = await Liked.find({ userLiked: req.user.id }).populate(
        "likedItems"
      );

      res.json(liketItems);
    } catch (err) {
      res.json(err.toString());
    }
  },
};
