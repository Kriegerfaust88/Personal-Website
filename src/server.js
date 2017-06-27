const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const helpers = require('./helpers');

const app = express();

app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

let pass;

getPass = () => {
  var fs = require('fs'),
    path = require('path'),
    filePath = path.join(__dirname, 'config.txt');

  fs.readFile(filePath, {
    encoding: 'utf-8'
  }, function(err, data) {
    if (!err) {
      pass = data;
    } else {
      console.log(err);
    }
  });
}

getPass();

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.post('/send', (req, res) => {
  console.log(req.body);
  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'dschroeder101@gmail.com',
      pass: `${pass}`
    }
  });

  const mailOptions = {
    from: email,
    to: 'dschroeder101@gmail.com',
    subject: 'Personal Site - message from ' + name,
    text: message
  }

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
      res.json({
        yo: 'error'
      });
    } else {
      console.log('Message sent: ' + info.response);
      res.json({
        yo: info.response
      });
    };
  })
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
})
