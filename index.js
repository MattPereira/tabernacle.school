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
// app.use('/tsFamily', familyRoutes)
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

app.get('/tsFamily/newsletter', (req, res) => {
    res.render('tsFamily/newsletter')
})

app.get('/tsFamily/awards', (req, res) => {
    res.render('tsFamily/awards')
})

app.get('/tsFamily/orientationVideo', (req, res) => {
    res.render('tsFamily/orientationVideo')
})

app.get('/tsFamily/info/orientationInfo', (req, res) => {
    res.render('tsFamily/info/orientationInfo')
})

app.get('/tsFamily/info/factsHelp', (req, res) => {
    res.render('tsFamily/info/factsHelp')
})

app.get('/tsFamily/info/supplyList', (req, res) => {
    res.render('tsFamily/info/supplyList')
})

app.get('/tsFamily/info/jrHighDiscipline', (req, res) => {
    res.render('tsFamily/info/jrHighDiscipline')
})

app.get('/tsFamily/info/uniformGuidelines', (req, res) => {
    res.render('tsFamily/info/uniformGuidelines')
})

app.get('/tsFamily/forms/driverForm', (req, res) => {
    res.render('tsFamily/forms/driverForm')
})

app.get('/tsFamily/forms/techAgreement', (req, res) => {
    res.render('tsFamily/forms/techAgreement')
})

app.get('/tsFamily/forms/bicycleAgree', (req, res) => {
    res.render('tsFamily/forms/bicycleAgree')
})



const port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
    console.log(`serving on port ${port}`)
})