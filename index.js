if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}


const express = require('express');
const path = require('path')

const app = express();

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
    
    const reject = () => {
        res.setHeader('www-authenticate', 'Basic')
        res.sendStatus(401)
      }
    
      const authorization = req.headers.authorization
    
      if(!authorization) {
        return reject()
      }
    
      const [username, password] = Buffer.from(authorization.replace('Basic ', ''), 'base64').toString().split(':')
    
      if(! (username === 'tigers' && password === 'sregit1971')) {
        return reject()
      }

    res.render('family')
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

app.get('/facultyProfiles/judyBurmeister', (req, res) => {
    res.render('facultyProfiles/judyBurmeister')
})

app.get('/facultyProfiles/rebeccaKelly', (req, res) => {
    res.render('facultyProfiles/rebeccaKelly')
})

app.get('/facultyProfiles/kimberlynSchmitz', (req, res) => {
    res.render('facultyProfiles/kimberlynSchmitz')
})

app.get('/facultyProfiles/kristenMcDermott', (req, res) => {
    res.render('facultyProfiles/kristenMcDermott')
})

app.get('/facultyProfiles/margaretTrice', (req, res) => {
    res.render('facultyProfiles/margaretTrice')
})

app.get('/facultyProfiles/vernTaylor', (req, res) => {
    res.render('facultyProfiles/vernTaylor')
})

app.get('/facultyProfiles/theresaKukla', (req, res) => {
    res.render('facultyProfiles/theresaKukla')
})

app.get('/facultyProfiles/davePereira', (req, res) => {
    res.render('facultyProfiles/davePereira')
})

app.get('/facultyProfiles/rebecaShreve', (req, res) => {
    res.render('facultyProfiles/rebecaShreve')
})

app.get('/facultyProfiles/pattiChan', (req, res) => {
    res.render('facultyProfiles/pattiChan')
})

app.get('/facultyProfiles/lisaMazzoncini', (req, res) => {
    res.render('facultyProfiles/lisaMazzoncini')
})

app.get('/facultyProfiles/lauriePease', (req, res) => {
    res.render('facultyProfiles/lauriePease')
})

app.get('/facultyProfiles/cathyColomb', (req, res) => {
    res.render('facultyProfiles/cathyColomb')
})



const port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
    console.log(`serving on port ${port}`)
})