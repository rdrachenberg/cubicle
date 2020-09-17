const url = require('url');
const fs = require('fs');
const path = require('path');

const cubeData = require('../config/database.json');


module.exports = (req, res) => {
    const pathname = url.parse(req.url).pathname;
    let id = pathname.split('/').pop();
    // console.log(id);
    if(pathname.includes('/details') && req.method == 'GET'){
        // return cubeData[id];
    }
    // cubeData = cubeData;
};

/* 
`<div class="cube">
    <img class="cube" src="${cube.imageUrl}" alt="${cube.name}">
    <p class="name">${cube.name}</p>
    <p name="Difficulty"><span>Difficulty level:</span>${cube.difficultyLevel}</p>
    <a class="btn" href="/details/:${cube.id}">Details</a>
</div>`
*/