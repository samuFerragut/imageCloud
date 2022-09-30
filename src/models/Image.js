const mongoose = require('mongoose');
const { Schema } = mongoose;

const Image = new Schema({
    title: String,
    description: String,
    image: {
        title: String,
        data: String
    }
},{
    collection: 'images'
});

module.exports = mongoose.model('Image', Image);