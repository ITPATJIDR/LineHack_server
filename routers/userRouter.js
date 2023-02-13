const router = require('express').Router();
const userCtrl = require('../controllers/userControllers')

router.get("/register", userCtrl.register)
router.post("/lineLogin", userCtrl.lineLogin)

module.exports = router