const { Router } = require("express");
const { basketController } = require("../controllers/basket.controller");
const authMiddleware = require("../middleware/auth.middleware");

const router = Router();

router.patch(
  "/basket/armchair/push/:id",
  authMiddleware,
  basketController.postArmchairToBasket
);
router.patch(
  "/basket/armchair/pull/:id",
  authMiddleware,
  basketController.pulltArmchairFromBasket
);
router.patch("/basket/sofa/:id", authMiddleware, basketController.postSofa);
router.get("/basket/armchairs", authMiddleware, basketController.getArmchairs);

module.exports = router;
