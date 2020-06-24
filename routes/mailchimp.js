var express = require('express');

const httpStatus = require( 'http-status' );
const MailchimpController = require('../controllers/Mailchimp');
var router = express.Router();
MilchimpController = require('../controllers/Mailchimp')

router.post('/subscribe',MailchimpController.subscribe)

module.exports = router;
