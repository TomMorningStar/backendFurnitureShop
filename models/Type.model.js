const mongoose = require("mongoose");

const typeSchema = mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
});

const Type = mongoose.model("Type", typeSchema);

module.exports = Type;
