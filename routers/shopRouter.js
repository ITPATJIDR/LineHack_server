const router = require('express').Router();
const shopCtrl = require('../controllers/shopControllers')

router.post("/createShop",shopCtrl.createShop)


module.exports = router