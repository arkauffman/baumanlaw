var User = require('./../models/user');
var transporter = require('./../config/mail');
var EmailTemplate = require('email-templates').EmailTemplate
var path = require('path');
var templateDir = path.join(__dirname, '../views', 'templates');
var async = require('async');

function sendEmail(req, res) {
    console.log(req.body, 'BODDDD')
    var emailTemplate = new EmailTemplate(templateDir)
    var info = {
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    }
    console.log('info', info)
    emailTemplate.render(info, function(err, message) {
        var mailOptions = {
            to: process.env.GOOGLE_EMAIL,
            cc: info.email,
            // this can never change with GMAIL security (have to have a diff provider pass)
            from: process.env.GOOGLE_EMAIL,
            subject: 'Website Message',
            html: `<p>
                        Message received from: ${info.name} 
                        <br><br>
                        They are inquiring about: 
                        <br><br>
                        <div class="message">
                            '${info.message}'
                        </div>
                        <br><br>
                        Contact: ${info.email}
                        <br><br>
                        Reply to this email to get in touch with them!
                    </p>`,
            style: message.css
        }
        console.log('YERJE', mailOptions.from)
        console.log('made it past render lalalalal')
        transporter.sendMail(mailOptions, function(err, info) {
            if (err) {
                console.log('ERRRORRRR', err)
                return res.redirect('/');
            }
            console.log('message sent!!!!!!!!')
            res.redirect('/');
            transporter.close();
        });
    });
}

module.exports = {
    sendEmail
}