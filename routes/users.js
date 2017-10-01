var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/users');

router.get('/contact', userCtrl.contact);
router.get('/attorneys', userCtrl.attorneys);
router.get('/about', userCtrl.about);
router.get('/contingency-fees', userCtrl.contingencyFees);
router.get('/client-testimonials', userCtrl.clientTestimonials);
router.get('/referrals', userCtrl.referrals);
router.get('/success-records', userCtrl.successRecords);
router.get('/bicycle-accidents', userCtrl.bicycleAccidents);
router.get('/brain-injury', userCtrl.brainInjury);
router.get('/bus-accidents', userCtrl.busAccidents);
router.get('/car-accidents', userCtrl.carAccidents);
router.get('/motorcycle-accidents', userCtrl.motorcycleAccidents);
router.get('/pedestrian-accidents', userCtrl.pedestrianAccidents);
router.get('/premises-liability', userCtrl.premisesLiability);
router.get('/product-defects', userCtrl.truckAccidents);
router.get('/product-liability', userCtrl.productLiability);
router.get('/truck-accidents', userCtrl.truckAccidents);
router.get('/wrongful-death', userCtrl.wrongfulDeath);
router.get('/small-claims', userCtrl.smallClaims);


       
 
    

router.post('/confirmation', userCtrl.sendEmail);

module.exports = router;
