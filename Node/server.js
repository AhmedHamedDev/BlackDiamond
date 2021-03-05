const http = require('http');
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express()
var nodemailer = require('nodemailer');

const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.post('/contactus', (req, res) => {
  let body = req.body;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'BlackDiamondWebsite123@gmail.com',
      pass: 'BlackDiamond@123'
    }
  });

  let mailOptions = {
    from: body.email,
    to: 'BlackDiamondWebsite123@gmail.com',
    // to: 'Blackdiamondegy@gmail.com',
    subject: body.subject,
    text: 
    `From: ${body.email} , 
     Full Name: ${body.name},
     Message: ${body.message}`
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error)
      return res.send({error: true, message: "Sorry Something Went Wrong, please try later"});
    } else {
      return res.send({error: false, message: "Your message sent successfully, we will contact you as soon as possible"});
    }
  });

});

app.listen(port, () => {
  console.log(`Server running`);
});