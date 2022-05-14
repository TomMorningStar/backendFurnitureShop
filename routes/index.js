const { Router } = require("express");
const importUser = require("./users.route");
const importSofa = require("./sofas.route");
const importType = require("./types.route");

const router = Router();

router.use(importUser);
router.use(importSofa);
router.use(importType);

module.exports = router;
