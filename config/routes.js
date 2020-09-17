// TODO: Require Controllers...
let path = require('path');

let controllers = require('../controllers/index');

// require('./config/routes')(app);

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.status(200);
        res.render('index', {layout: 'main'});
    });

    // If no matching route is found default to 404 page
    app.get("*", function (req, res) {
        // res.status(404);
        res.render(path.join(__dirname, "../views/404.hbs"));
    });
};