const express = require('express');

const routes = express.Router();

routes.get('/ongs', async (request, response) => {
    const data = request.body;

    console.log(data);

    return response.json();
});


module.exports = routes;