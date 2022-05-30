const Armchairs = require("../models/Armchair.model");

module.exports.armchairsController = {
  postArmchairs: async (req, res) => {
    const {
      name,
      price,
      amount,
      type,
      img,
      liked,
      onBasket,
      manufacturer,
      dimensions,
      backHeight,
      armrestHeightFromSeat,
      maximumLoad,
      supportHeight,
      supportMaterial,
      landingHeight,
      sleepingPlace,
      layoutMechanism,
      desc,
      width,
      depth,
      height,
      material,
    } = req.body;
    try {
      const armchair = await Armchairs.create({
        name,
        price,
        type,
        img,
        liked,
        onBasket,
        manufacturer,
        amount,
        description: {
          dimensions,
          backHeight,
          armrestHeightFromSeat,
          maximumLoad,
          supportHeight,
          supportMaterial,
          landingHeight,
          sleepingPlace,
          layoutMechanism,
          desc,
        },

        characteristics: {
          width,
          depth,
          height,
          material,
        },
      });
      res.json(armchair);
    } catch (err) {
      res.json(err.toString());
    }
  },

  getArmchairs: async (req, res) => {
    try {
      const armchairs = await Armchairs.find().populate("type");
      res.json(armchairs);
    } catch (err) {
      res.json(err.toString());
    }
  },
};
