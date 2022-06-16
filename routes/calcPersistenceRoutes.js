const express = require("express");
const router = express.Router();

const persistenceController = require("../controller/persistenceController");

router.get("/v1/storage", persistenceController.readNumber);

router.post("/v1/storage", persistenceController.persistNumber);

module.exports = router;
