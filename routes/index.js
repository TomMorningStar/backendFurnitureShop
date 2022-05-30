const { Router } = require("express");
const importUser = require("./users.route");
const importSofa = require("./sofas.route");
const importType = require("./types.route");
const importArmchair = require("./armchairs.route");
const importBasket = require("./baskets.routes");
const importLiked = require("./likeds.route");

const router = Router();

router.use(importUser);
router.use(importSofa);
router.use(importType);
router.use(importArmchair);
router.use(importBasket);
router.use(importLiked);

module.exports = router;
