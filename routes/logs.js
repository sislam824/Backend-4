const express = require('express');
const router = express.Router();
const logController = require('../controller/logController');

router.get('/', logController.getLogs);

module.exports = router;
