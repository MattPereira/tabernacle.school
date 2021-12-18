const express = require('express');
const router = express.Router();
const home = require('../controllers/home');


router.get ('/', home.home)

router.get('/about', home.about)

router.get('/admissions', home.admissions)

router.get('/academics', home.academics)

router.get('/campus', home.campus)

router.get('/contact', home.contact)

router.get('/employment', home.employment)

module.exports = router;