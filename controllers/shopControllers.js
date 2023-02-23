const prisma = require('../utils/prisma');
const shopCtrl = {
	createShop: async (req, res) => {
		try{
			const {itemName, itemImage, bananaPoint, itemDescription} = req.body
			await prisma.bananaPoint.create({
				data:{
					itemName: itemName,
					itemImage: itemImage,
					itemBananaPoint:bananaPoint,
					itemDescription: itemDescription
				}
			})	

			res.status(200).json({message: "create shop success !!!"});
		}catch (err) {
			res.status(500).json({message: err.message});
		}
	}
}

module.exports = shopCtrl