const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const useBodyParser = bodyParser.json({ type: "*/*"})

const mongoose = require('mongoose');
const User = require('./models/User');

mongoose.connect('mongodb://max:password0@ds053698.mlab.com:53698/signup-dev', {
    useNewUrlParser: true
})

const cors = require('cors');
app.use(cors());




app.get('/api/instagram', function(req, res) {


    console.log('redirect');
    console.log(res.data);

    res.send({
        data: res
    })
})


// app.post('/', function(req, res) {
//     res.send({
//         message: 'its a message'
//     })
// })

app.post('/api/signup', useBodyParser, function(req, res) {
    const body = req.body;
    const email = body.email;
    const password = body.password;

    User.findOne({ email: email }, async (err, existingUser) => {
        if(err) { res.send(err) }
        if(existingUser) {
            return res.status(422).send({
                message: 'email in use'
            })
        }
        const user = new User({
            email,
            password
        })
        try {
            await user.save()

            res.send({
                success: true,
                message: 'account created',
                user
            })
        } catch (err) {
            console.log(err);
            res.status(422).send(err)
        }
    })

 
    res.send({
        success: true,
        user: {
            email, password
        }
    })
})


if(process.env.NODE_ENV === 'production') {
    app.use(express.static(__dirname + '/client/dist/'));
    app.get(/.*/, function (req, res) {
        res.sendFile(__dirname + '/client/dist/index.html');
    })
    console.log('prod inbound');
  }
  

const PORT = process.env.PORT || 5000;
console.log('listening on port: ', PORT);
app.listen(PORT);