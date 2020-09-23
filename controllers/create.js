const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory');
const jwt = require('jsonwebtoken');

module.exports = {
//*************.route method *************//
    route:(req, res) => {
        res.status(200);
        res.render('create', {
            title: 'Create A Cube',
            layout: 'main',
        });
    }, 
//*************.data  method *************//
    data: (req, res) => {
        let formData = req.body;
        console.log(formData);

        if (formData.name == undefined || formData.name == null){
            console.log('No name was submitted!');
            return;

        } else if (formData.description == undefined || formData.description == null || formData.description.length >= 400) {
            console.log('No description or description was too long!');
            return;

        } else if (formData.imageUrl == undefined || formData.imageUrl == null || validURL(formData.imageUrl)) {
            console.log('Not an image or invalid image url location!');
            return;

        } else if (formData.difficultyLevel == undefined || formData.difficultyLevel == null || formData.difficultyLevel < 1 || formData.difficultyLevel > 6) {
            console.log('No difficulty level or difficulty level is less than 1 or greater than 6!');
            return;

        } else {
            new Cube(formData)
            .save().then((cube) => {
                console.log(cube._id);
                res.redirect('/');
            }).catch(err => {
                if(err) {
                    console.log(err._message);
                    return;
                }
            });
        }
    }
};

//*************** Function to validate our incoming form img url string ***************//
function validURL(str) {
    var pattern = /​((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/i;
    console.log(pattern.test(str));
    return !!pattern.test(str);
}