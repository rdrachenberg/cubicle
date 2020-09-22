// ==============================================================================
//* DEPENDENCIES *
// ==============================================================================
let path = require('path');
let homeController = require('../controllers/home.js');
let detailsController = require('../controllers/details.js');

let createControllerRoute = require('../controllers/create.js').route;
let createControllerData = require('../controllers/create.js').data;

let createAccessoryRoute = require('../controllers/accessory').route;
let createAccessoryData = require('../controllers/accessory').data;

let attachAccessoryRoute = require('../controllers/attach').route;
let attachAccessoryData = require('../controllers/attach').data;

let aboutController = require('../controllers/about.js');


// ==============================================================================
//* ALL ROUTING & EXPORT MODULE *
// ==============================================================================
module.exports = (app) => {
// ==============================================================================
    //************ Home Route ************\\
// ==============================================================================
    app.get('/', (req, res) => {
        homeController(req, res);
    });

// ==============================================================================
    //************ About Route ************\\
// ==============================================================================
    app.get('/about', (req, res) => {
        aboutController(req, res);
    });
    
// ==============================================================================
    //************ Create Routes ************\\
// ==============================================================================
    app.get('/create', (req, res) => {
        createControllerRoute(req, res);
    });

    app.post('/create', (req, res) => {
        createControllerData(req, res);
    });

// ==============================================================================
    //************ Details Route ************\\
// ==============================================================================
    app.get('/details/:id', (req, res) => {
        detailsController(req, res);
    });
    
// ==============================================================================
    //************ Accessory Routes ************\\
// ==============================================================================
    app.get('/create/accessory/:id', (req, res) => {
        attachAccessoryRoute(req, res);
    });
    app.post('/create/accessory/:id', (req, res) => {
        attachAccessoryData(req, res);
    });
    app.get('/create/accessory', (req, res) => {
        createAccessoryRoute(req, res);
    });
    app.post('/create/accessory', (req, res) => {
        createAccessoryData(req, res);
    });

    



// ==============================================================================
    //************ Not Found Route ************\\
// ==============================================================================
    // If no matching route is found default to 404 page
    app.get("*", function (req, res) {
        res.status(404);
        res.render(path.join(__dirname, "../views/404.hbs"));
    });
};