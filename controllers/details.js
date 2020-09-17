
const url = require('url');
const fs = require('fs');
const path = require('path');

const cubeData = require('../config/database.json');


module.exports = (req, res) => {
    const pathname = url.parse(req.url).pathname;
    let id = pathname.split('/:').pop();
    console.log(id);
    if (pathname.includes('/details/') && req.method == 'GET') {
        // return cubeData[id];
    }
    // cubeData = cubeData;
};


// const pathname = url.parse(req.url).pathname;
// id = pathname.split('/').pop().split(':').pop() - 1;