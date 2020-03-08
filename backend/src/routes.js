const express = require('express');

const routes = express.Router();

routes.post('/users', (req,res)=>{
    return res.json(json.body);
});

module.exports = routes;