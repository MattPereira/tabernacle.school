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
app.use('/family', familyRoutes)
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

app.get('/contact', (req, res) => {
    res.render('contact')
})

app.get('/employment', (req, res) => {
    res.render('employment')
})



const port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
    console.log(`serving on port ${port}`)
})