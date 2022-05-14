const { Router } = require("express");
const { typeController } = require("../controllers/type.controller");

const router = Router();

router.post("/type", typeController.postType);
router.get("/type", typeController.getTypes);

module.exports = router;
