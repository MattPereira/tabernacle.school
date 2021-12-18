if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const express = require('express');
const path = require('path')

const homeRoutes = require('./routes/home');
const familyRoutes = require('./routes/family');
const facultyRoutes = require('./routes/faculty');



const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.use(express.static(path.join(__dirname, 'public')))


// app.use('/', homeRoutes)
// app.use('/familyDashboard', familyRoutes)
app.use('/faculty', facultyRoutes)


// MAIN PAGES
app.get('/', (req, res) => {
    res.render('home.ejs')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/admissions', (req, res) => {
    res.render('admissions')
})

app.get('/academics', (req, res) => {
    res.render('academics')
})

app.get('/campus', (req, res) => {
    res.render('campus')
})

app.get('/family', (req, res) => {
    
    // const reject = () => {
    //     res.setHeader('www-authenticate', 'Basic')
    //     res.sendStatus(401)
    //   }
    
    //   const authorization = req.headers.authorization
    
    //   if(!authorization) {
    //     return reject()
    //   }
    
    //   const [username, password] = Buffer.from(authorization.replace('Basic ', ''), 'base64').toString().split(':')
    
    //   if(! (username === 'tigers' && password === 'sregit1971')) {
    //     return reject()
    //   }

    res.render('family')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})

app.get('/employment', (req, res) => {
    res.render('employment')
})



// FAMILY DASHBOARD PAGES

app.get('/familyDashboard/newsletter', (req, res) => {
    res.render('familyDashboard/newsletter')
})

app.get('/familyDashboard/awards', (req, res) => {
    res.render('familyDashboard/awards')
})

app.get('/familyDashboard/orientationVideo', (req, res) => {
    res.render('familyDashboard/orientationVideo')
})

app.get('/familyDashboard/info/orientationInfo', (req, res) => {
    res.render('familyDashboard/info/orientationInfo')
})

app.get('/familyDashboard/info/factsHelp', (req, res) => {
    res.render('familyDashboard/info/factsHelp')
})

app.get('/familyDashboard/info/supplyList', (req, res) => {
    res.render('familyDashboard/info/supplyList')
})

app.get('/familyDashboard/info/jrHighDiscipline', (req, res) => {
    res.render('familyDashboard/info/jrHighDiscipline')
})

app.get('/familyDashboard/info/uniformGuidelines', (req, res) => {
    res.render('familyDashboard/info/uniformGuidelines')
})

app.get('/familyDashboard/forms/driverForm', (req, res) => {
    res.render('familyDashboard/forms/driverForm')
})

app.get('/familyDashboard/forms/techAgreement', (req, res) => {
    res.render('familyDashboard/forms/techAgreement')
})

app.get('/familyDashboard/forms/bicycleAgree', (req, res) => {
    res.render('familyDashboard/forms/bicycleAgree')
})



const port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
    console.log(`serving on port ${port}`)
})