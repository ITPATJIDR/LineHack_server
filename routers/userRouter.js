const router = require('express').Router();
const userCtrl = require('../controllers/userControllers')

router.post("/register", userCtrl.register)
router.post("/getUserDetail", userCtrl.getUserDetail)

module.exports = router