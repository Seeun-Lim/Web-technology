require('dotenv').config();
const path = require('path');

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const twsRouter = require('./routes/web/tws');
const twsRouter2 = require('./routes/api/tws');
const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.engine('.hbs', exphbs({
    extname: '.hbs',
    defualtLayout: 'main'
}));
app.set('view engine','.hbs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/tws',twsRouter);
app.use('/api/tws',twsRouter2);

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