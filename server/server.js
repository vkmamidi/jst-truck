

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer");
const creds = require("./config.js");
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;
// const smtptransport = require('nodemailer-smtp-transport')

app.use(express.static(publicPath));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
   extended: false
}));
app.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.post('/send', (req, res) => {
  // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        auth: {
        user: creds.USER,
        pass: creds.PASS
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: creds.USER, // sender address
        to: `${req.body.email}`, // list of receivers
        subject: 'Reminder From JST Truck permits', // Subject line
        text: 'Postcard', // plain text body
        html: '<b>Your subscription for the plates is expiring soon, please contact us to renew your plates</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
    });
});

app.listen(port, () => {
  console.log(`Server is up ${port} !`);
});
