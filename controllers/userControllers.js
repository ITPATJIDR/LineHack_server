const prisma = require('../utils/prisma')
const Token = require("csrf")
const OneTimeToken = require("one-time-password")
const tokens = new Token()
const secret = tokens.secretSync()
const KEY = "ATXCKMTSIKUKEJVXJTPDXYUMREKCJRCEYWTQGBUWYSHZAXOBVGWFXTJWXBPUSLOCHRJBLWYMTHJBIOJVCSSYDHFWVFSTRNBEAYVXJHTVEAZHKLMVVLGAVMTADVWWFMQRECXJVNVGJEEZFROYDYWSZRGCCCAWBCHNIJLVUCQEVOSGCTVJEEXPUBQMXVUHJJULUDTHLUOMBXJFJJPNIEGJACJZWPKQKBQYHRKKCBUZFEDRHDTEEZFPTHZCIEIVTQGE"

const userCtrl = {
	register: async (req, res, next) => {
		try {
			const userAll = await prisma.user.findMany()
			res.send(userAll)
		} catch (err) {
			console.log(err)
			next()
		}
	},
	lineLogin: async (req, res, next) => {
		const client_id = "1657835103"
		const CSRF_TOKEN = tokens.create(secret)
		const redirect_uri = "http://localhost:5001"
		const scope = "profile"
		const nonce = OneTimeToken.generate(KEY)
		const lineLoginURL = `https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=${client_id}&redirect_uri=${redirect_uri}&state=${CSRF_TOKEN}&scope=${scope}&nonce=${nonce}`
		res.redirect(lineLoginURL)
	}
}

module.exports = userCtrl