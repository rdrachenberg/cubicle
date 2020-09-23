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
        // let formData = req.body;
        // console.log(formData);
        if(res.status != 'ok'){
            console.log(res.status);
        }

        let user = req.body;
        // let name = req.body.username;
        // let password = req.body.password;
        // console.log(user);
        // console.log(name);
        // console.log(password);
        
        new User(user).save().then((newUser) => {
            res.json(newUser);
            console.log(newUser);
        }).catch(err => {
            console.log(err);
        });

        
        res.redirect('/');

    }
    
};