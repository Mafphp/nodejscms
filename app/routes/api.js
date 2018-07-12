const express = require('express');
const router = express.Router();

// controllers
const apiController = require('../http/controllers/api/indexControler');

router.get('/', apiController.index);


module.exports = router;