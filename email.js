var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'imcaioresende@gmail.com',
    pass: 'caiocesar123'
  }
});

var mailOptions = {
  from: 'imcaioresende@gmail.com',
  to: 'imcaioresende@gmail.com',
  subject: 'Contact through',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});