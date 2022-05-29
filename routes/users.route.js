const { Router } = require("express");
const { userController } = require("../controllers/user.controller");
const authMiddleware = require("../middleware/auth.middleware");

const router = Router();

router.post("/user/register", userController.registerUser);
router.post("/user/login", userController.loginUser);
router.get("/user", authMiddleware, userController.getUser);
router.get("/get/basket", authMiddleware, userController.getBasket);

module.exports = router;
