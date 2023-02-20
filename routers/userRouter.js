const router = require('express').Router();
const userCtrl = require('../controllers/userControllers')

router.post("/register", userCtrl.register)
router.post("/getUserDetail", userCtrl.getUserDetail)
router.post("/updateBananaPoint", userCtrl.updateBananaPoint)

module.exports = router