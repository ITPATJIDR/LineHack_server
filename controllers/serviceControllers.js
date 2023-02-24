const prisma = require('../utils/prisma');
const serviceCtrl = {
	createService: async (req,res,next) => {
		try{
			const {serviceImage,serviceName,serviceDescription, serviceContact, serviceLineContact,serviceDistance, campId} = req.body
			await prisma.service.create({
				data:{
					campId: campId,
					serviceImage: serviceImage,
					serviceName: serviceName,
					serviceDescription: serviceDescription,
					serviceContact: serviceContact,
					serviceLineContact: serviceLineContact,
					serviceDistance: serviceDistance    
				}
			})
			res.status(200).json({message:"add service Success!!!"})
		}catch (err){
			res.status(500).json({message: err.message});
		}
	},
	getAllService: async (req,res,next) => {
		try{
			const {userId} = req.body
			const result = await prisma.booking.findUnique({ 
				where:{
					userId: userId
				},
				include:{
					User: true,
					Camp:{
						select:{
							service: true
						}
					} 
				}
			})
			res.status(200).json({data:result})
		}catch (err){
			res.status(500).json({message: err.message});
		}
	},
	getServiecById: async (req,res,next) => {
		try{
			const {userId} = req.body
			const result = await prisma.user.findUnique({ 
				where:{
					userId: userId
				},
				include:{
					Booking:{
						select:{
							Camp:true
						}
					}
				}
			})
			res.status(200).json({data:result})
		}catch (err){
			res.status(500).json({message: err.message});
		}
	} 

}

module.exports = serviceCtrl