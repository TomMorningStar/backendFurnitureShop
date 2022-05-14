const mongoose = require("mongoose");

const sofaSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Type",
  },
  img: {
    type: String,
    required: true,
  },
  liked: {
    type: Boolean,
    default: false,
  },
  onBasket: {
    type: Boolean,
    default: false,
  },

  description: {
    dimensions: String,
    landingHeight: String,
    backHeight: String,
    armrestHeightFromSeat: String,
    maximumLoad: String,
    supportHeight: String,
    supportMaterial: String,
    landingHeight: String,
    sleepingPlace: String,
    layoutMechanism: String,
    desc: String,
  },
});

const Sofa = mongoose.model("Sofa", sofaSchema);

module.exports = Sofa;
