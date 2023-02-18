const router = require('express').Router();
const campCtrl = require('../controllers/campControllers')

router.post("/addCamp",campCtrl.addCamp);
router.get("/getAllCamp",campCtrl.getAllCamp);
router.post("/getCampbyId",campCtrl.getCampById);
router.post("/addCampFacility",campCtrl.addCampFacilityDescription);
router.get("/getCampFacility",campCtrl.getCampFacilityDescription);

module.exports = router