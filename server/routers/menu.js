const express = require('express');
const router = express.Router();
const controllerMenu = require('../controllers/menu');

router.get("/", controllerMenu.getMenu);

module.exports = router;