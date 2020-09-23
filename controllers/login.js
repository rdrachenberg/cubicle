let User = require('../models/User');
const bcrypt = require('bcrypt');
// let bcrypt = require('bcryptjs');
const jsonwebtoken = require('jsonwebtoken');
const cookieparser = require('cookie-parser');


module.exports = {

    route: (req, res) => {
        res.status(200);
        res.render('login', {
            title: 'Login User',
            // user: user,
            layout: 'main',
        });
    },
    data: async (req, res) => {
        let user = req.params.body;
        console.log(user);
        // try {
        //     req.body.password = bcrypt.hashSync(req.body.password, 10);
        //     let user = new User(req.body);
        //     let result = await user.save();
        //     console.log(result);
        //     res.send(result);
        // } catch (err) {
        //     res.status(500).send(err);
        // }
    }

};