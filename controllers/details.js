// ==============================================================================
//* DEPENDENCIES *
// ==============================================================================
const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory');

module.exports = (req, res) => {
    let id = req.params.id;
    // console.log(id);

    Cube.findById(id)
        .lean()
        .populate('accessories')
        .catch(err => {
            console.log(err);
        }).then(cube => {
        
            res.status(200);
            res.render('details', {
                layout: 'main',
                cube: cube,
                accessory: cube.accessories,
            });
        });
};