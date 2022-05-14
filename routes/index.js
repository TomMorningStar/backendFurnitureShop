const { Router } = require("express");
const importUser = require("./users.route");

const router = Router();

router.use(importUser);

module.exports = router;
