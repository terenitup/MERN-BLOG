const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const useBodyParser = bodyParser.json({ type: "*/*"})

const mongoose = require('mongoose');
const User = require('./models/User');

mongoose.connect('mongodb://teren_1:password1@ds111178.mlab.com:11178/singup-dev', {
    useNewUrlParser: true
})

const cors = require('cors');
app.use(cors());


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

app.post('/api/signin', useBodyParser, function(req, res) {
    const body = req.body;
    const email = body.email;
    const password = body.password;

    User.findOne({ email: email }, (err, existingUser) => {
        if(err) { res.send(err) }

        if(existingUser) {
            if(password == existingUser.password) {
                //authenticated
                res.send({
                    success: true,
                    message: 'user successfully signed in',
                    user: applicantUser
                })
            } else {
                res.send({
                    success: true,
                    message: 'incorrect email or password'
                })
            }
        } else {
            res.send({
                success: true,
                message: 'incorrect email or password'
            })
        }
        
    })
})


// if(process.env.NODE_ENV === 'production') {
//     app.use(express.static(__dirname + '/client/dist/'));
//     app.get(/.*/, function (req, res) {
//         res.sendFile(__dirname + '/client/dist/index.html');
//     })
//     console.log('prod inbound');
//   }
  

const PORT = process.env.PORT || 5000;
console.log('listening on port: ', PORT);
app.listen(PORT);