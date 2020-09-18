const Cube = require('../models/Cube');

module.exports = (req, res) => {
    Cube.find({}).lean().then(cubes => {
        console.log(cubes);
        res.status(200);
        res.render('index', {
            layout: 'main',
            cube: cubes
        });
    });
};