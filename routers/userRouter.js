const router = require('express').Router();
const userCtrl = require('../controllers/userControllers')

router.get("/register", userCtrl.register)
router.post("/getUserDetail", userCtrl.getUserDetail)

module.exports = router