const express = require('express');
const app = express();

const morgan = require('morgan');

//Settings
app.set('port',process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Routers
app.use(require('./routes/index'));

//Starting the server
app.listen(app.get('port'),()=>{
    console.log('Server on port',app.get('port'));
});