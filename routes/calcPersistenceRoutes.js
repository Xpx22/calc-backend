const express = require("express");
const router = express.Router();

const persistenceController = require("../controller/persistenceController");

router.post("/v1/persist", persistenceController.persistNumber);

router.get("/v1/read", persistenceController.readNumber);

module.exports = router;
