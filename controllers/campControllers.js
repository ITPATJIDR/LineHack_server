const prisma = require('../utils/prisma');
const moment = require("moment")


const campCtrl = {
	addCamp: async (req, res) => {
		try {
			const { campImage, campName,
				campDescription, campLocation,
				bookingPrice, campRating, 
				campPromotionRating, campFeeDescription,
				campFacility, rentalEquipment, wifi, phoneSignal, electricity
				,toilet 
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
					rentalEquipment:rentalEquipment,
					wifi: wifi,
					phoneSignal: phoneSignal,
					electricity:electricity,
					toilet:toilet
				} 
			})
			res.status(200).json({ message: "addCamp success" })
		} catch (err) {
			res.status(500).json({ message: err.message })
		}
	},
	getAllCamp: async (req, res) => {
		try {
			const result = await prisma.camp.findMany()
			res.status(200).json({ data: result })
		} catch (err) {
			res.status(500).json({ message: err.message })
		}
	}, 
	getCampById: async (req, res) => {
		try {
			const { id } = req.body
			const result = await prisma.camp.findUnique({
				where:{
					id:id
				}
			})
			res.status(200).json({ data: result })
		} catch (err) {
			res.status(500).json({ message: err.message })
		}
	},
	booking: async (req, res,next) =>{
		try{
			const {userId, campId, campAmount, startDate, endDate,
				phoneNumber,name ,age, birthDate, email ,address
			} = req.body

			const startDateStr = moment(startDate).format('YYYY-MM-DD HH:mm:ss')
			const endDateStr = moment(endDate).format('YYYY-MM-DD HH:mm:ss')  
			const brithDateStr = moment(birthDate).format('YYYY-MM-DD HH:mm:ss')  

			const result = await prisma.booking.create({
				data:{
					userId: userId,
					campId: campId,
					campAmount: campAmount,
					startDate: startDateStr,
					endDate: endDateStr,
					phoneNumber: phoneNumber,
					name: name,
					age: age,
					birthDate: brithDateStr,
					email:email,
					address:address
				}
			})
			res.status(200).json({data: result})
		}catch (err) {
			res.status(500).json({ message: err.message })
		}
	},
	checkBooking : async (req,res) => {
		try{
			const { userId } = req.body;	
			const result = await prisma.user.findUnique({
				where: {
					userId: userId
				},
				include:{
					Booking: true
				}
			})
			res.status(200).json({data: result})
		}catch(err){
			res.status(500).json({ message: err.message })
		}
	}
}

module.exports = campCtrl