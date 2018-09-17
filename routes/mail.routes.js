
 var mailer = require('../controllers/ll');
 var express = require('express');
 var api = express.Router();
 
 api.post('/mail', mailer.sendEmail);


 module.exports = api;

//  mailer.sendEmail();