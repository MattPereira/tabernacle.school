const express = require('express');
const app = express();
const path = require('path')



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.use(express.static(path.join(__dirname, 'public')))

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
    res.render('family')
})

app.listen(3000, () => {
    console.log('listening on port 300')
})