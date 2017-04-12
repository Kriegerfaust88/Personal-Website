const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.post('/send', function(req, res) {
    const Email = require('emailjs/email');
    var server = Email.server.connect({
        host: 'localhost'
    });
    console.log(req.body);
    server.send({
        'text': req.body,
        'from': req.body.email,
        'to': 'dschroeder101@gmail.com',
        'reply-to': req.body.email,
        'subject': 'Sent from my personal site!'
    }, function(error) {
        if (error) {
            return res.send({
                status: 'failed'
            });
        } else {
            return res.send({
                status: 'OK'
            });
        }
    })
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
})
