// Express implementation
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');

const app = express();

const { DB } = require('./config/DB');

// Image route
const imageRoutes = require('./routes/images');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect (DB)
    .then(() => console.log('db connected'))
    .catch(err => console.log(err));

// PORT config
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(cors());
app.use(bodyParser.json());

// routes
app.use('/images', imageRoutes);


// ruta para los archivos staticos
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
} );


// const app = express();
// mongoose.connect('mongodb+srv://admin:admin@imagecloud.rt7ii4i.mongodb.net/?retryWrites=true&w=majority')
// .then(db => console.log('Conectado a la BBDD'))
// .catch(err => console.error(err))

// // Express settings 
// app.set('port', process.env.PORT || 3000);

// // Express middleware
// app.use(morgan('dev'));
// app.use(express.json());

// // Express Routes
// app.use('/images', require('./routes/images'));

// // Express static files
// app.use(express.static(__dirname + '/app/image-cloud/public'));

// // Server lintening
// app.listen(app.get('port'), () => {
//     console.log('Server on port', app.get('port'));
// })