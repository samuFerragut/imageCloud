const mongoose = require('mongoose');
const { Schema } = mongoose;

const Image = new Schema({
    title: {type: String},
    description: {type: String},
    image: {type: String}
},{
    collection: 'images'
});

module.exports = mongoose.model('Images', Image);