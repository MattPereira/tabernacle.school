const express = require('express');
const app = express();
const path = require('path')



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.use(express.static(path.join(__dirname, 'public')))



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
    res.render('family')
})


// TEACHER PROFILE PAGES

app.get('/facultyProfiles/charinaMoore', (req, res) => {
    res.render('facultyProfiles/charinaMoore')
})

app.get('/facultyProfiles/sylviaBorde', (req, res) => {
    res.render('facultyProfiles/sylviaBorde')
})

app.get('/facultyProfiles/bettyMason', (req, res) => {
    res.render('facultyProfiles/bettyMason')
})

app.get('/facultyProfiles/ceciliaPrior', (req, res) => {
    res.render('facultyProfiles/ceciliaPrior')
})

app.get('/facultyProfiles/linaFoltz', (req, res) => {
    res.render('facultyProfiles/linaFoltz')
})

app.get('/facultyProfiles/alexisJue', (req, res) => {
    res.render('facultyProfiles/alexisJue')
})

app.get('/facultyProfiles/emilyScouten', (req, res) => {
    res.render('facultyProfiles/emilyScouten')
})

app.get('/facultyProfiles/terraJean', (req, res) => {
    res.render('facultyProfiles/terraJean')
})

app.get('/facultyProfiles/tracyHerrera', (req, res) => {
    res.render('facultyProfiles/tracyHerrera')
})

app.get('/facultyProfiles/ashleyLecair', (req, res) => {
    res.render('facultyProfiles/ashleyLecair')
})

app.get('/facultyProfiles/heatherCochnauer', (req, res) => {
    res.render('facultyProfiles/heatherCochnauer')
})

app.get('/facultyProfiles/rachelleLongtin', (req, res) => {
    res.render('facultyProfiles/rachelleLongtin')
})

app.get('/facultyProfiles/pamelaLucido', (req, res) => {
    res.render('facultyProfiles/pamelaLucido')
})

app.get('/facultyProfiles/noriSwanson', (req, res) => {
    res.render('facultyProfiles/noriSwanson')
})

app.get('/facultyProfiles/haleyMax', (req, res) => {
    res.render('facultyProfiles/haleyMax')
})

app.get('/facultyProfiles/stephanieKent', (req, res) => {
    res.render('facultyProfiles/stephanieKent')
})

app.get('/facultyProfiles/jasonStone', (req, res) => {
    res.render('facultyProfiles/jasonStone')
})

app.get('/facultyProfiles/brendaChapman', (req, res) => {
    res.render('facultyProfiles/brendaChapman')
})

app.get('/facultyProfiles/aureliusMorgan', (req, res) => {
    res.render('facultyProfiles/aureliusMorgan')
})

app.get('/facultyProfiles/steveSouza', (req, res) => {
    res.render('facultyProfiles/steveSouza')
})

app.get('/facultyProfiles/andyPrior', (req, res) => {
    res.render('facultyProfiles/andyPrior')
})

app.get('/facultyProfiles/toddKeough', (req, res) => {
    res.render('facultyProfiles/toddKeough')
})

app.get('/facultyProfiles/tirzahBurke', (req, res) => {
    res.render('facultyProfiles/tirzahBurke')
})

app.get('/facultyProfiles/joeyPrior', (req, res) => {
    res.render('facultyProfiles/joeyPrior')
})

app.get('/facultyProfiles/daranFraser', (req, res) => {
    res.render('facultyProfiles/daranFraser')
})

app.get('/facultyProfiles/alexanderBuckley', (req, res) => {
    res.render('facultyProfiles/alexanderBuckley')
})

app.get('/facultyProfiles/coryBrady', (req, res) => {
    res.render('facultyProfiles/coryBrady')
})

app.get('/facultyProfiles/amieRobison', (req, res) => {
    res.render('facultyProfiles/amieRobison')
})



app.listen(3000, () => {
    console.log('listening on port 300')
})