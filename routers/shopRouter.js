const router = require('express').Router();
const shopCtrl = require('../controllers/shopControllers')

router.post("/createShop",shopCtrl.createShop)
router.get("/getAllShop",shopCtrl.getAllShop)


module.exports = router