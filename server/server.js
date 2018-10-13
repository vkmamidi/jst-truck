

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer");
const creds = require("./config.js");
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;
const Nexmo = require('nexmo');
const xoauth2 = require('xoauth2');
const nexmo = new Nexmo({
    apiKey:process.env.CONFIG_APIKEY,
    apiSecret:process.env.CONFIG_APISECRET
});
//   apiKey: process.env.CONFIG_APIKEY,
//   apiSecret: process.env.CONFIG_APISECRET

// load aws sdk
var aws = require('aws-sdk');

// load aws config
// aws.config.loadFromPath('config.json');

// load AWS SES
var ses = new aws.SES({apiVersion: '2010-12-01'});

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

// app.post('/send',(req,res)=>{
//     ses.sendEmail( { 
//         Source: 'vkmamidi1410@gmail.com', 
//         Destination: {
//              ToAddresses: [req.body.email] 
//             },
//         Message: {
//             Subject:{
//                Data: 'A Message To You Rudy'
//             },
//             Body: {
//                 Text: {
//                     Data: 'Stop your messing around',
//                 }
//              }
//         }
//      },(err,responseData)=>{
//          if(err){
//              console.log(err)
//          }else{
//              console.log(responseData)
//          }
//      }
//      )
// })

app.post('/sendsms',(req,res)=>{
    console.log(req.body.numbers)
   const end = req.body.numbers.length
//    console.log(end)
    for(let i =0;i<end;i++){
        setTimeout(()=>{
            nexmo.message.sendSms(
                process.env.CONFIG_NUMBER,req.body.numbers[i],req.body.text,{type:'unicode'},
                (err,responseData)=>{
                    if (err) {
                        console.log(err);
                      } else {
                        console.dir(responseData);
                      }
                }
           )},i*1800)
    }


    
})

app.post('/send', (req, res) => {
  // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        auth: {
        user: process.env.CONFIG_USER_NAME,
        pass: process.env.CONFIG_PASSWORD
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: process.env.CONFIG_USER_NAME, // sender address
        bcc: `${req.body.email}`, // list of receivers
        subject: 'Reminder From JST Truck permits', // Subject line
        text: 'Postcard', // plain text body
        html: req.body.text // html body
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
})
