module.exports.tsFamily = (req, res) => {

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

    res.render('family/tsFamily')
}

//TIGER LIFE
module.exports.newsletter = (req, res) => {
    res.render('family/tigerLife/newsletter')
}

module.exports.awards = (req, res) => {
    res.render('family/tigerLife/awards')
}

module.exports.orientationVideo = (req, res) => {
    res.render('family/tigerLife/orientationVideo')
}


//INFO
module.exports.parentOrientation = (req, res) => {
    res.render('family/info/parentOrientation')
}

module.exports.factsHelp = (req, res) => {
    res.render('family/info/factsHelp')
}

module.exports.supplyList = (req, res) => {
    res.render('family/info/supplyList')
}

module.exports.jrHighDiscipline = (req, res) => {
    res.render('family/info/jrHighDiscipline')
}

module.exports.uniformGuidelines = (req, res) => {
    res.render('family/info/uniformGuidelines')
}


//FORMS
module.exports.driverForm = (req, res) => {
    res.render('family/forms/driverForm')
}

module.exports.techAgreement = (req, res) => {
    res.render('family/forms/techAgreement')
}

module.exports.bicycleAgree = (req, res) => {
    res.render('family/forms/bicycleAgree')
}



