var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/users');

router.post('/confirmation', userCtrl.sendEmail);

module.exports = router;
