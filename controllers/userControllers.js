const prisma = require('../utils/prisma')
const Token = require("csrf")
const OneTimeToken = require("one-time-password")
const tokens = new Token()
const secret = tokens.secretSync()
const KEY = "ATXCKMTSIKUKEJVXJTPDXYUMREKCJRCEYWTQGBUWYSHZAXOBVGWFXTJWXBPUSLOCHRJBLWYMTHJBIOJVCSSYDHFWVFSTRNBEAYVXJHTVEAZHKLMVVLGAVMTADVWWFMQRECXJVNVGJEEZFROYDYWSZRGCCCAWBCHNIJLVUCQEVOSGCTVJEEXPUBQMXVUHJJULUDTHLUOMBXJFJJPNIEGJACJZWPKQKBQYHRKKCBUZFEDRHDTEEZFPTHZCIEIVTQGE"

const userCtrl = {
	register: async (req, res, next) => {
		try {
			const {userId, userImage, userName} = req.body
			const result = await prisma.user.findFirst({
				where :{
					userId: userId,
				}
			})
			res.send(result)
			if (result === null) {
				const newUser = await prisma.user.create({
					data: {
						userId: userId,
						userImage: userImage,
						userName: userName,
						bananaPoint: "0",
					}
				})
				res.status(200).json({user:newUser})
			}else{
				res.status(200).json({user: result})
			}
		} catch (err) {
			console.log(err)
			next()
		}
	},
	getUserDetail: async(req, res, next) => {
		try{
			const {userId} = req.body
			const result = await prisma.user.findUnique({
				where :{
					userId: userId,
				}
			})
		}catch (err) {
			console.log(err)
		}	
	},
	updateBananaPoint: async (req, res, next ) => {
		try{
			const {id,bananaPoint} = req.body	
			const result = await prisma.user.update({
				where:{
					id: id,
				},
				data:{
					bananaPoint: bananaPoint
				}
			})
			res.status(200).json({message: "update BananaPoint !!!"})
		}
		catch (err) {
			res.status(500).json({message: err.message})
		}
	}
}

module.exports = userCtrl