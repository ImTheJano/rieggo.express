const { sendMail } = require ( '../own_modules/mailer' )
const httpStatus = require( 'http-status' )
module.exports = {
	store: async ( req, res, next ) => {
		var webClientData = req.body;
		try {
			var fs = require ( 'fs' )
			var util = require ( 'util' )
			const readFile = util.promisify ( fs.readFile )
			var html = await readFile ( './views/mail/date.html', )
			await sendMail ( { mail: { to: webClientData.email, subject: 'Has solicitado servicio de Plomerísimo', text: '' , html } } )
			res.status ( httpStatus.OK ) .json ( webClientData )
		} catch ( error ) {
			console.log(error);
			res.status(httpStatus.INTERNAL_SERVER_ERROR).json(error) 
		}
	 } ,
}