const mongoose = require("mongoose");

const armchairSchema = mongoose.Schema({
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
  amount: {
    type: Number,
    default: 1,
  },
  manufacturer: String,

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

  characteristics: {
    width: String,
    depth: String,
    height: String,
    material: String,
  },
});

const Armchair = mongoose.model("Armchair", armchairSchema);

module.exports = Armchair;
