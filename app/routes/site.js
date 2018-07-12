const express = require('express');
const router = express.Router();

// controllers
const siteController = require('../http/controllers/site/indexControler');

router.get('/', siteController.index);


module.exports = router;