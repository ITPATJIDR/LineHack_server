const router = require('express').Router();
const campCtrl = require('../controllers/campControllers')

router.post("/addCamp",campCtrl.addCamp);
router.get("/getAllCamp",campCtrl.getAllCamp);
router.post("/getCampbyId",campCtrl.getCampById);
router.post("/booking",campCtrl.booking);
router.post("/checkBooking",campCtrl.checkBooking);
router.post("/checkBooking2",campCtrl.checkBooking2);

module.exports = router