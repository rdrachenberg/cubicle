let User = require('../models/User');
// let bcrypt = require('bcrypt');
let bcrypt = require('bcryptjs');
let jsonwebtoken = require('jsonwebtoken');
let cookieparser = require('cookie-parser');

module.exports ={

    route: (req, res)=> {
        res.status(200);
        res.render('register', {  
            title: 'Register User',
            // user: user,
            layout: 'main',
        });
    },
    data: (req, res) => {
        let user = req.body;
        
        new User(user).save()
            .then((newUser) => {
                console.log(newUser);
                
            }).then(login => {
                // console.log(login);
            }).catch(err => {
                console.log(err);
            });

        res.redirect('/');

    }
    
};