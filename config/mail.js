var nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');

var transporter = nodemailer.createTransport({
    service: `${process.env.NODEMAILER_SERVICE}`,
    host: "smtp.gmail.com",
    port: 465,
    secure: false,
    auth: {
        user: `${process.env.NODEMAILER_USER}`,
        pass: `${process.env.NODEMAILER_PASS}`
    }
});

module.exports = transporter;