const router = require('express').Router();
const serviceCtrl = require('../controllers/serviceControllers')

router.post("/createService", serviceCtrl.createService)
router.get("/getAllService", serviceCtrl.getAllService)
router.post("/getServiceById", serviceCtrl.getServiecById)

module.exports = router