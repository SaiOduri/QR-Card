const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

const uri = 'mongodb://codemasher:mash123@ds123171.mlab.com:23171/codemash';
mongoose.connect(uri, {useNewUrlParser: true});

const User = mongoose.model('User');
require('models/models');


const crypto = require('crypto');

const session = require('express-session');
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
}));

var isAuthenticated = function(req, res, next) {
    console.log(req.username);
    if (!req.username) return res.status(401).end("access denied");
    next();
};


function generateSalt (){
    return crypto.randomBytes(16).toString('base64');
}

function generateHash (password, salt){
    var hash = crypto.createHmac('sha512', salt);
    hash.update(password);
    return hash.digest('base64');
}

app.use(function (req, res, next){
    req.username = ('username' in req.session)? req.session.username : null;
    console.log("HTTP request", req.username, req.method, req.url, req.body);
    next();
});


// SIGN UP AND SIGN IN

app.post('/signup/', function (req, res, next) {
    // extract data from HTTP request
    if (!('username' in req.body)) return res.status(400).end('username is missing');
    if (!('password' in req.body)) return res.status(400).end('password is missing');
    var username = req.body.username;
    var salt = generateSalt();
    var saltedHash = generateHash(req.body.password, salt);
    // check if user already exists in the database
    User.findOneAndUpdate({_id: username}, function(err, user){
        if (err) return res.status(500).end(err);
        if (user) return res.status(409).end("username " + username + " already exists");
        res.setHeader('Set-Cookie', cookie.serialize('username', username, {
              path : '/', 
              maxAge: 60 * 60 * 24 * 7
        }));
        // start a session
        req.session.username = username;
        return res.json("user " + username + " signed up");
    });
});

app.post('/signin/', function (req, res, next) {
    // extract data from HTTP request
    if (!('username' in req.body)) return res.status(400).end('username is missing');
    if (!('password' in req.body)) return res.status(400).end('password is missing');
    var username = req.body.username;
    // retrieve user from the database
    User.findOne({_id: username}, function(err, user){
        if (err) return res.status(500).end(err);
        if (!user) return res.status(401).end("access denied");
        var saltedHash = generateHash(req.body.password, user.salt);
        if (user.saltedHash !== saltedHash) return res.status(401).end("access denied"); 
        // initialize cookie
        res.setHeader('Set-Cookie', cookie.serialize('username', username, {
              path : '/', 
              maxAge: 60 * 60 * 24 * 7
        }));
        // start a session
        req.session.username = user._id;
        return res.json("user " + username + " signed in");
    });
});



const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`API is running on port ${PORT}`));


