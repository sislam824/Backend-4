const express = require("express");
const router = express.Router();
const doubtsController = require("../controller/doubtsController");

router.post("/", doubtsController.createDoubt);
router.get("/", doubtsController.getUnansweredDoubts);
router.post("/:id/responded", doubtsController.respondToDoubt);

module.exports = router;
