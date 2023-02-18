const prisma = require('../utils/prisma');

const campCtrl = {
	addCamp: async (req, res) => {
		try {
			const { campImage, campName,
				campDescription, campLocation,
				bookingPrice, campRating, 
				campPromotionRating, campFeeDescription,
				campFacility, campFacilityDescription
			 } = req.body
			await prisma.camp.create({
				data:{
					campImage: campImage,
					campName: campName,
					campDescription:campDescription,
					campLocation:campLocation,
					bookingPrice: bookingPrice,
					campRating:campRating,
					campPromotionRating:campPromotionRating,
					campFeeDescription:campFeeDescription,
					campFacility:campFacility,
				} 
			})
			res.status(200).json({ message: "addCamp success" })
		} catch (err) {
			res.status(500).json({ message: err.message })
		}
	},
	getAllCamp: async (req, res) => {
		try {
			const result = await prisma.camp.findMany({
				include: {
					campFacilityDescription: true
				}
			})
			res.status(200).json({ data: result })
		} catch (err) {
			res.status(500).json({ message: err.message })
		}
	}, 
	getCampById: async (req, res) => {
		try {
			const { id } = req.body
			const Camp = await prisma.camp.findUnique({
				where:{
					id:id
				}
			})
			res.send(Camp)
		} catch (err) {
			res.status(500).json({ message: err.message })
		}
	},addCampFacilityDescription: async (req, res) => {
		try{
			const { tentRenting, campId , wifi, activity, suitBestFor, nearbyRestaurant } = req.body
			await prisma.campFacilityDescription.create({
				data:{
					tentRenting: tentRenting,
					campId: campId,
					wifi: wifi,
					activity: activity,
					suitBestFor: suitBestFor,
					nearbyRestaurant: nearbyRestaurant	
				}
			})
			res.status(200).json({messgae:"add Facility Success"})
		}catch (err) {
			res.status(500).json({ message: err.message })
		}
	}
}

module.exports = campCtrl