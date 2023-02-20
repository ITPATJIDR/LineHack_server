const router = require('express').Router();
const campCtrl = require('../controllers/campControllers')

router.post("/addCamp",campCtrl.addCamp);
router.get("/getAllCamp",campCtrl.getAllCamp);
router.post("/getCampbyId",campCtrl.getCampById);
router.post("/booking",campCtrl.booking);

module.exports = router