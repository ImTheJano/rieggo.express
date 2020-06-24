const httpStatus = require( 'http-status' )
const axios = require('axios')
module.exports = {
	subscribe: async(req, res, next)=>{
		try {
			var body = { members: [ { email_address: req.body.email, status: 'pending' } ] }
			var headers = {'Authorization': 'Basic ' + new Buffer(`rotoplas:5bb7b1f4d71ddb3e028162f78279d0bc-us10`).toString('base64') } 
			// var headers = {user:'rieggo.com', pass: '5bb7b1f4d71ddb3e028162f78279d0bc-us10' } 
			// var r = await axios.post('https://us10.api.mailchimp.com/3.0/lists/c7cb1ccabf', body, { headers })
			r = {}
			res.status( httpStatus.OK ).json({res: r.data})
		} catch (error) {
			console.log(error);
			res.status ( httpStatus.INTERNAL_SERVER_ERROR ) .json ( {error} )
		}
	}
}