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
            .then(function(newUser){
                console.log(newUser);
                bcrypt.compare(req.body.password, newUser.password, function(err, result){
                    console.log(result);
                    if(result){
                        loggedIn = true;
                        console.log(loggedIn + ' <<<< is loggedIn?');
                        res.redirect('/');
                    } else{
                        console.log(result + ' <<<< is error result?');
                    }
                });
            }).catch(err => {
                console.log(err);
            });

        // res.redirect('/register');

    }
    
};