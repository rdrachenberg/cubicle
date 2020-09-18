// ==============================================================================
//* DEPENDENCIES *
// ==============================================================================
let path = require('path');
let homeController = require('../controllers/home.js');
let detailsController = require('../controllers/details.js');
let createControllerRoute = require('../controllers/create.js').route;
let createControllerData = require('../controllers/create.js').data;
let aboutController = require('../controllers/about.js');

// ==============================================================================
//* ALL ROUTING & EXPORT MODULE *
// ==============================================================================
module.exports = (app) => {
    // ==========================================================================
    //************ Home Route ************\\
    // ==========================================================================
    app.get('/', (req, res) => {
        homeController(req, res);
    });

    // ==========================================================================
    //************ About Route ************\\
    // ==========================================================================
    app.get('/about', (req, res) => {
        aboutController(req, res);
    });
    
    // ==========================================================================
    //************ Create Routes ************\\
    // ==========================================================================
    app.get('/create', (req, res) => {
        createControllerRoute(req, res);
    });

    app.post('/create', (req, res) => {
        createControllerData(req, res);
    });

    // ==========================================================================
    //************ Details Route ************\\
    // ==========================================================================
    app.get('/details/:id', (req, res) => {
        
        detailsController(req, res);
    });
    
    // ==========================================================================
    //************ Not Found Route ************\\
    // ==========================================================================
    // If no matching route is found default to 404 page
    app.get("*", function (req, res) {
        res.status(404);
        res.render(path.join(__dirname, "../views/404.hbs"));
    });
};