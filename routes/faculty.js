const express = require("express");
const router = express.Router();
const faculty = require("../controllers/faculty");

//TK & KINDERGARTEN
router.get("/charinaMoore", faculty.charinaMoore);

router.get("/sylviaBorde", faculty.sylviaBorde);

router.get("/bettyMason", faculty.bettyMason);

router.get("/ceciliaPrior", faculty.ceciliaPrior);

router.get("/linaFoltz", faculty.linaFoltz);

//1ST GRADE
router.get("/alexisJue", faculty.alexisJue);

router.get("/emilyScouten", faculty.emilyScouten);

router.get("/terraJean", faculty.terraJean);

//2ND GRADE
router.get("/tracyHerrera", faculty.tracyHerrera);

router.get("/ashleyLecair", faculty.ashleyLecair);

router.get("/heatherCochnauer", faculty.heatherCochnauer);

router.get("/rachelleLongtin", faculty.rachelleLongtin);

//3RD GRADE
router.get("/pamelaLucido", faculty.pamelaLucido);

router.get("/noriSwanson", faculty.noriSwanson);

router.get("/haleyMax", faculty.haleyMax);

//4TH GRADE
router.get("/stephanieKent", faculty.stephanieKent);

router.get("/ericIsaacson", faculty.ericIsaacson);

//5TH GRADE
router.get("/brendaChapman", faculty.brendaChapman);

router.get("/aureliusMorgan", faculty.aureliusMorgan);

//JUNIOR HIGH
router.get("/steveSouza", faculty.steveSouza);

router.get("/andyPrior", faculty.andyPrior);

router.get("/toddKeough", faculty.toddKeough);

router.get("/tirzahBurke", faculty.tirzahBurke);

router.get("/joeyPrior", faculty.joeyPrior);

//PHYSICAL EDUCATION
router.get("/daranFraser", faculty.daranFraser);

router.get("/alexanderBuckley", faculty.alexanderBuckley);

router.get("/coryBrady", faculty.coryBrady);

router.get("/amieRobison", faculty.amieRobison);

//ELECTIVES
router.get("/judyBurmeister", faculty.judyBurmeister);

router.get("/rebeccaKelly", faculty.rebeccaKelly);

router.get("/kimberlynSchmitz", faculty.kimberlynSchmitz);

router.get("/kristenMcDermott", faculty.kristenMcDermott);

router.get("/margaretTrice", faculty.margaretTrice);

//ADMINISTRATION
router.get("/vernTaylor", faculty.vernTaylor);

router.get("/theresaKukla", faculty.theresaKukla);

router.get("/davePereira", faculty.davePereira);

router.get("/rebecaShreve", faculty.rebecaShreve);

router.get("/pattiChan", faculty.pattiChan);

router.get("/lisaMazzoncini", faculty.lisaMazzoncini);

router.get("/lauriePease", faculty.lauriePease);

router.get("/cathyColomb", faculty.cathyColomb);

module.exports = router;
