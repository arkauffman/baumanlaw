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
        telephone: req.body.telephone,
        message: req.body.message
    }
    console.log('info', info)
    emailTemplate.render(info, function(err, message) {
        var mailOptions = {
            to: process.env.NODEMAILER_USER,
            cc: info.email,
            // this can never change with GMAIL security (have to have a diff provider pass)
            from: process.env.NODEMAILER_USER,
            subject: `Message from ${info.name}`,
            html: message.html,
            style: message.css
        }
        console.log('YERJE', mailOptions)
        console.log('made it past render lalalalal')
        transporter.sendMail(mailOptions, function(err, info) {
            if (err) {
                console.log('ERRRORRRR', err)
                return res.redirect('/');
            }
            console.log('message sent!!!!!!!!')
            res.redirect('/');
            // send a confirmation response
            transporter.close();
        });
    });
}

function contact(req, res) {
    let key = process.env.GOOGLE_KEY;
    res.render('nav/contact', {key});
}

function attorneys(req, res) {
    res.render('about/attorneys');
}

function about(req, res) {
    res.render('about/about');
}

function contingencyFees(req, res) {
    res.render('about/contingencyFees');
}

function clientTestimonials(req, res) {
    res.render('about/clientTestimonials');
}

function referrals(req, res) {
    res.render('nav/referrals');
}

function successRecords(req, res) {
    res.render('nav/successRecords');
}

function bicycleAccidents(req, res) {
    res.render('practiceAreas/bicycleAccidents');
}

function brainInjury(req, res) {
    res.render('practiceAreas/brainInjury');
}

function busAccidents(req, res) {
    res.render('practiceAreas/busAccidents');
}

function carAccidents(req, res) {
    res.render('practiceAreas/carAccidents');
}

function motorcycleAccidents(req, res) {
    res.render('practiceAreas/motorcycleAccidents');
}

function pedestrianAccidents(req, res) {
    res.render('practiceAreas/pedestrianAccidents');
}

function premisesLiability(req, res) {
    res.render('practiceAreas/premisesLiability');
}

function productLiability(req, res) {
    res.render('practiceAreas/productLiability');
}

function truckAccidents(req, res) {
    res.render('practiceAreas/truckAccidents');
}

function wrongfulDeath(req, res) {
    res.render('practiceAreas/wrongfulDeath');
}

function smallClaims(req, res) {
    res.render('nav/smallClaims');
}

module.exports = {
    sendEmail,
    contact,
    attorneys,
    about,
    contingencyFees,
    clientTestimonials,
    referrals,
    successRecords,
    bicycleAccidents,
    brainInjury,
    busAccidents,
    carAccidents,
    motorcycleAccidents,
    pedestrianAccidents,
    premisesLiability,
    productLiability,
    truckAccidents,
    wrongfulDeath,
    smallClaims
}