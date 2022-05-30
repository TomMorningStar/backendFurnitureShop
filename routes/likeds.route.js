const { Router } = require("express");
const { likedController } = require("../controllers/liked.controllers");
const authMiddleware = require("../middleware/auth.middleware");

const router = Router();

router.patch(
  "/liked/armchair/push/:id",
  authMiddleware,
  likedController.postArmchairToLiked
);
router.patch(
  "/liked/armchair/pull/:id",
  authMiddleware,
  likedController.pullArmchairFromLiked
);

router.get("/get/liked", authMiddleware, likedController.getArmchairs);

module.exports = router;
