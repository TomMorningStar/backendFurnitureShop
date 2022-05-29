const { Router } = require("express");
const { sofaController } = require("../controllers/sofa.controller");

const router = Router();

router.post("/sofa", sofaController.postSofa);
router.get("/sofa", sofaController.getSofas);

module.exports = router;
