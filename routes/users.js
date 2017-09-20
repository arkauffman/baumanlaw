var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/users');

router.get('/location', userCtrl.location);
router.get('/contact', userCtrl.contact);
router.post('/confirmation', userCtrl.sendEmail);

module.exports = router;
