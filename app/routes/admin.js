const express = require('express');
const router = express.Router();

// controllers
const adminController = require('../http/controllers/admin/indexControler');

router.get('/', adminController.index);


module.exports = router;