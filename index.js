require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const twsRouter = require('./routes/tws');

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use('/tws',twsRouter);

app.get('/',function(req,res){
    res.send('It works!');
});

app.use((req,res,next) => {
    const error = new Error('Not found!');
    error.status = 404;
    next(error);
});

app.listen(process.env.PORT,function(){
    console.log('Server running on localhost:'+process.env.PORT);
});