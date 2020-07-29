const express = require('express');
const Router = express.Router();

const testMiddleWare = require('../../middleWare/test');

/*
Router.get('/', (req,res) => {
    res.status(200).send('GET Tws2');
});
*/ 

Router.get('/',testMiddleWare,(req,res) => {
    res.render('tws');
});

module.exports = Router;