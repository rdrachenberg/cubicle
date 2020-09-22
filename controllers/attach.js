const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory');

module.exports = {
    //*************.route method *************//
    route: (req, res) => {
        let id = req.params.id;
        // console.log(id);
        Cube.findById(id).lean().catch(err => console.error(err))
            .then(cube => {
                // console.log(cube);

                Accessory.find({}).lean()
                .catch(err => console.error(err))
                .then(accessories => {
                    // this.window.sessionStorage.setItem('accessories', JSON.stringify(accessories));
                    // console.log(accessories);
                    res.status(200);
                    res.render('attachAccessory', {
                        layout: 'main',
                        title: 'Attach Accessory',
                        accessories: accessories,
                        cube: cube,
                        id: id
                    });
                });
                
            }
        );
    },

    data: (req, res) => {
        let formData = req.body;
        console.log(formData);
        console.log(req.params.id);
        let id = req.params.id;
        let name = req.params;

        Accessory.findOne(formData).lean().catch(err => {
            console.log(err);
        }).then(accessory => {
            console.log(accessory);

            Cube.findByIdAndUpdate({_id: id}, {
                accessories: accessory, 
                useFindAndModify: false,
                safe: true,
                new: true
            }).then((response) => {
                console.log(response);
                res.status(200);
                res.redirect('/');
            });
        });
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
            // new Accessory(formData)
            //     .save().then((accessory) => {
            //         console.log(accessory);
            //         res.redirect('/');
            //     }).catch(err => {
            //         if (err) {
            //             console.log(err._message);
            //             return;
            //         }
            //     });
        // }
    }
};

//*************** Function to validate our incoming form img url string ***************//
function validURL(str) {
    var pattern = /​((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/i;
    console.log(pattern.test(str));
    return !!pattern.test(str);
}