const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
// const nameOfController = require('./controller'); 
// require('./db');

app.use(bodyParser.urlencoded({extended: false})); 
app.use(methodOverride('_method')); 
// app.use('/', controller);

app.listen(3000, () => {
    console.log('listening on port 3000') 
});