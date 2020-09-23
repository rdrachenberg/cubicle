const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory');

module.exports = {
//*************.route method *************//
    route: (req, res) => {
        res.status(200);
        res.render('accessory', {
            title: 'Create Accessory',
            layout: 'main',
        });
    },

    data: (req, res) => {
        let formData = req.body;
        // console.log(formData);

        // if (formData.name == undefined || formData.name == null) {
        //     console.log('No name was submitted!');
        //     return;

        // } else if (formData.description == undefined || formData.description == null || formData.description.length >= 400) {
        //     console.log('No description or description was too long!');
        //     return;

        // } else if (formData.imageUrl == undefined || formData.imageUrl == null || validURL(formData.imageUrl)) {
        //     console.log('Not an image or invalid image url location!');
        //     return;

        // } else {
            new Accessory(formData)
                .save().then((accessory) => {
                    console.log(accessory);
                    res.redirect('/');
                }).catch(err => {
                    if (err) {
                        console.log(err._message);
                        return;
                    }
                });
        }
    
};

//*************** Function to validate our incoming form img url string ***************//
function validURL(str) {
    var pattern = /​((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/i;
    console.log(pattern.test(str));
    return !!pattern.test(str);
}