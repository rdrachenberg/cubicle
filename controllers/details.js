// ==============================================================================
//* DEPENDENCIES *
// ==============================================================================
const Cube = require('../models/Cube');

module.exports = (req, res) => {
    let id = req.params.id;
    console.log(id);
    // let cubeIndex = cubeData.findIndex(cube => cube.id == id);
    Cube.findById(id).lean().then(cube =>{
        console.log(cube);
        res.status(200);
        res.render('details', {
            layout: 'main',
            cube: cube
        });
    });
};