const express = require('express');
const handlebars = require('express-handlebars');
// const bodyParser = require('body-parser');

module.exports = (app) => {
    express.urlencoded({ extended: true });

    // app.set('views', __dirname + '../views');
    
    app.engine('.hbs', handlebars({
        defaultLayout:  'index',
        extname: '.hbs'
    }));
    app.set('view engine', '.hbs');
    
    
    // app.use(bodyParser());

    app.use(express.static('static'));



    //TODO: Setup the view engine

    //TODO: Setup the body parser

    //TODO: Setup the static files

};