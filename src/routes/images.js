const express = require('express');
const router = express.Router();

// Model
const Image = require('../models/Image');

// RETRIEVE images
router.get('/:id', (req, res, next) => {
    Image.findById(req.params.id, function(err, image){
        if(err){
            res.status(500).json({message:'Se ha producido un error al obtener la imagen'})
        }
        else{
            res.json(image);
        }        
    })
});

// GET images
router.get('/', (req, res) => {
    Image.find(function (err, image) {
        if(err) {            
            res.status(500).send({message: 'Error en get de imagenes'})
        }
        else {
            res.json(image);
        }
    })
});

// POST images

router.post('/',(req, res) => {
    const image = new Image(req.body);
    image.save()
    .then(image => {
        res.status(201).json({message: ' La imagen ha sido guardada'})
    })
    .catch(err => {
        res.status(400).send({message: 'Se ha producido un error al guardar la imagen '})
    });
});

// PUT images
router.put('/:id', (req, res) => {
    Image.findById(req.params.id, function (err, image){
        if(!image) {
            return res.status(404).send('No se ha encontrado la imagen');
        } else {
            image = req.body;
            image.save()
            .then(image => {
                res.status(200).json('Imagen actualizada');
            })
            .catch(err => {
                res.status(400).send('Se ha producido un error al actualizar la imagen');
            });
        }
    })
});

// DELETE image
router.delete('/:id', (req, res, next) => {
    Image.findByIdAndRemove(req.params.id, function (err, image) {
        if(err) {            
            res.status(400).send('Se ha producido un error al eliminar la imagen');
        }
        else{
            res.json('Imagen eliminada');            
        }
    });
});

module.exports = router;