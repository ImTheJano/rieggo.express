const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
	host: process.env.MAILER_HOST,
	port: process.env.MAILER_PORT,
	secure: process.env.MAILER_SECURE, // true for 465, false for other ports
	auth: {
		user: process.env.MAILER_USER, // generated ethereal user
		pass: process.env.MAILER_PASS // generated ethereal password
	}
});
module.exports = {
	async sendMail(args){
		try{
			let info = await transporter.sendMail({
				from: '"rieggo" <'+process.env.MAILER_ADDRESS+'>', // sender address
				to: [args.mail.to,process.env.MAILER_EMAIL], // list of receivers
				subject: args.mail.subject, // Subject line
				//text: args.mail.text, // plain text body
				html: args.mail.html, // html body
			});
			//console.log("Message sent: %s", info.messageId)
			//console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))
			nodemailer.getTestMessageUrl(info)
		}catch(error){ 
			console.error('error: '+error);
		};
	}
}