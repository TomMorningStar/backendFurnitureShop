const { Router } = require("express");
const { armchairsController } = require("../controllers/armchair.controller");

const router = Router();

router.post("/armchairs", armchairsController.postArmchairs);
router.get("/armchairs", armchairsController.getArmchairs);

module.exports = router;
