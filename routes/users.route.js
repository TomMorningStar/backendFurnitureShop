const { Router } = require("express");
const { userController } = require("../controllers/user.controller");

const router = Router();

router.post("/user/register", userController.registerUser);
router.post("/user/login", userController.loginUser);

module.exports = router;
