const express = require('express');
const Router = express.Router();

Router.get('/', (req,res) => {
    res.status(200).send('GET Tws2');
});

Router.post('/',(req,res) => {
    res.status(200).send('POST Tws');
});

module.exports = Router;