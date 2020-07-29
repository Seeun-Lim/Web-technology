const express = require('express');
const Router = express.Router();

const testMiddleWare = require('../../middleWare/test');

var tws = [{id: 0,message: 'Test 1'},
             {id: 12,message: 'Test 2'},
             {id: 56,message: 'Test 3'}];

Router.get('/',testMiddleWare,(req,res) => {
    //res.status(200).send('Get Middleware');
    res.status(200).json(tws);
});

Router.get('/:twId',(req,res) => {
    twId = req.params.twId;

    tw = tws.filter((tw) => {
        return tw.id == twId;
    });

    //res.status(200).send('GET tw ' + twId);
    res.status(200).json(tw);
});
/*
Router.post('/:twId',(req,res) => {
    twId = req.params.twId;
    console.log(req.body.message);

    tws.push({
        id: twId,
        message: req.body.message
    })

    //res.status(200).send('POST Tws '+ req.body.message);
    res.status(200).json(tws);
});
*/

Router.post('/',(req,res) => {
    console.log(req.body.message);

    tws.push({
        id: 7,
        message: req.body.message
    })

    //res.status(200).send('POST Tws '+ req.body.message);
    res.status(200).json(tws);
});

Router.delete('/:twId',(req,res) =>{
    twId = req.params.twId;

    tws = tws.filter((tw) => {
        return tw.id != twId;
    })

    res.status(200).json(tws);
});

Router.patch('/:twId',(req,res) => {
    twId = req.params.twId;
    message = req.body.message;

    tws = tws.filter((tw) => {
        if(tw.id == twId){
            //console.log(twId);
            tw.message = message;
        }
        return tws;
    });

    res.status(200).json(tws);

});

module.exports = Router;