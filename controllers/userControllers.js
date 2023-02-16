const prisma = require('../utils/prisma')
const Token = require("csrf")
const OneTimeToken = require("one-time-password")
const tokens = new Token()
const secret = tokens.secretSync()
const KEY = "ATXCKMTSIKUKEJVXJTPDXYUMREKCJRCEYWTQGBUWYSHZAXOBVGWFXTJWXBPUSLOCHRJBLWYMTHJBIOJVCSSYDHFWVFSTRNBEAYVXJHTVEAZHKLMVVLGAVMTADVWWFMQRECXJVNVGJEEZFROYDYWSZRGCCCAWBCHNIJLVUCQEVOSGCTVJEEXPUBQMXVUHJJULUDTHLUOMBXJFJJPNIEGJACJZWPKQKBQYHRKKCBUZFEDRHDTEEZFPTHZCIEIVTQGE"

const userCtrl = {
	register: async (req, res, next) => {
		try {
			
			// const {userId, userImage, userName} = req.body
			// const result = await prisma.user.findFirst({
			// 	where :{
			// 		userId: userId,
			// 	}
			// })
			// if (result === null) {
			// 	const newUser = await prisma.user.create({
			// 		data: {
			// 			userId: userId,
			// 			userImage: userImage,
			// 			userName: userName,
			// 			bananaPoint: "0",
			// 		}
			// 	})
			// 	res.status(200).json({user:newUser})
			// }else{
			// 	res.status(200).json({user: result})
			// }
			res.send("hi")
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
	}
}

module.exports = userCtrl