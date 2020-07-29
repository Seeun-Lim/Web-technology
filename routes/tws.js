const express = require('express');
const Router = express.Router();

const testMiddleWare = require('../middleWare/test');

/*
Router.get('/', (req,res) => {
    res.status(200).send('GET Tws2');
});
*/ 

Router.get('/',testMiddleWare,(req,res) => {
    res.status(200).send('Get Middleware');
});

Router.get('/:twId',(req,res) => {
    twId = req.params.twId;
    res.status(200).send('GET tw ' + twId);
});

Router.post('/:twId',(req,res) => {
    console.log(req.body.message);
    res.status(200).send('POST Tws '+ req.body.message);
});

module.exports = Router;