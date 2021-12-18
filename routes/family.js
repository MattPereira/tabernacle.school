const express = require('express');
const router = express.Router();
const family = require('../controllers/family');


//INDEX
router.get('/tsFamily', family.tsFamily)


//TIGER LIFE
router.get('/tigerLife/newsletter', family.newsletter)

router.get('/tigerLife/awards', family.awards)

router.get('/tigerLife/orientationVideo', family.orientationVideo)


//INFO
router.get('/info/parentOrientation', family.parentOrientation)

router.get('/info/factsHelp', family.factsHelp)

router.get('/info/supplyList', family.supplyList)

router.get('/info/jrHighDiscipline', family.jrHighDiscipline)

router.get('/info/uniformGuidelines', family.uniformGuidelines)


// //FORMS
router.get('/forms/driverForm', family.driverForm)

router.get('/forms/techAgreement', family.techAgreement)

router.get('/forms/bicycleAgree', family.bicycleAgree)



module.exports = router;