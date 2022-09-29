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
});

// PUT route
router.put('/:id', async(req, res) => {
    await Image.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        status: 'Image updated correctly'
    });
});

//DELETE route
router.delete('/:id', async(req, res) => {
    await Image.findByIdAndDelete(req.params.id);
    res.json({
        status: 'Image deleted correctly'
    });
});

module.exports = router;