const express =  require('express');
const router = express.Router();

const Image = require('../models/Image');

// GET route
router.get('/', async (req, res) => {
    const images = await Image.find();
    res.json(images);
})

// POST route
router.post('/', async(req, res) => {
    const image = new Image(req.body);
    await image.save();
    res.json({
        status: 'Image saved correctly'
    });
})

module.exports = router;