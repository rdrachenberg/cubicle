// TODO: Require Controllers...
let path = require('path');
let cubeData = require('./database.json');
let controllers = require('../controllers/index');
const url = require('url');

// require('./config/routes')(app);

module.exports = (app) => {
    //************ Home Route ************\\
    app.get('/', (req, res) => {
        res.status(200);
        res.render('index', {
            layout: 'main',
            cubeData: cubeData
        });
    });

    //************ About Route ************\\
    app.get('/about', (req, res) => {
        res.status(200);
        res.render('about', {layout: 'main'});
    });

    //************ Create Route ************\\
    app.get('/create', (req, res) => {
        res.status(200);
        res.render('create', {layout: 'main'});
    });

    //************ Details Route ************\\
    app.get('/details/:id', (req, res) => {
        const pathname = url.parse(req.url).pathname;
        id = pathname.split('/').pop().split(':').pop() -1;
        // console.log(id);
        res.status(200);
        res.render('details', {
            layout: 'main',
            controllers: controllers,
            cubeData: cubeData[id]
        });
    });
    //************ Not Found Route ************\\
    // If no matching route is found default to 404 page
    app.get("*", function (req, res) {
        res.status(404);
        res.render(path.join(__dirname, "../views/404.hbs"));
    });
};