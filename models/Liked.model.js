const mongoose = require("mongoose");

const likedSchema = mongoose.Schema({
  userLiked: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  likedItems: [
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

const Liked = mongoose.model("Liked", likedSchema);

module.exports = Liked;
