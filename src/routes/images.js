const express =  require('express');
const router = express.Router();

const Image = require('../models/Image');

router.get('/', async (req, res) => {
    const images = await Image.find();
    res.json(images);
})

module.exports = router;