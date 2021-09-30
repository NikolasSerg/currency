const express = require('express');
const router = express.Router();
const controllerCurrency = require('../controllers/currency');

router.get("/:id", controllerCurrency.getCurrency);

module.exports = router;