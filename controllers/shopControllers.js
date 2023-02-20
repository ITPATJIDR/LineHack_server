const prisma = require('../utils/prisma');
const shopCtrl = {
	createShop: async (req, res) => {
		try{
			
		}catch (err) {
			res.status(500).json({message: err.message});
		}
	}
}

module.exports = shopCtrl