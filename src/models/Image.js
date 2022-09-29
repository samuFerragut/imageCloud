const mongoose = require('mongoose');
const { Schema } = mongoose;

const Image = new Schema({
    title: String,
    description: String,
    image: {
        title: String,
        data: String
    }
});

module.exports = mongoose.model('Image', Image);