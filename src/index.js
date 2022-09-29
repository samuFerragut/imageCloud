// Express implementation
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb+srv://admin:admin@imagecloud.rt7ii4i.mongodb.net/?retryWrites=true&w=majority')
.then(db => console.log('Conectado a la BBDD'))
.catch(err => console.error(err))

// Express settings 
app.set('port', process.env.PORT || 3000);

// Express middleware
app.use(morgan('dev'));
app.use(express.json());

// Express Routes
app.use('/images', require('./routes/images'));

// Express static files
app.use(express.static(__dirname + '/public'));

// Server lintening
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})