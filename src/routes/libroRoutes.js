const express = require('express');
const router = express.Router();

// INPUT FILTERS 
const { validarLibro } = require('../filters/input/libro.input');
const { validarId } = require('../filters/input/common.input');

// 👇 OUTPUT FILTER 
const { successResponse } = require('../filters/output/response.output');

// 👇 PROCESSING (Integrante 3)
const {
    getAllLibros,
    createLibro,
    getLibroById,
    updateLibro,
    deleteLibro
} = require('../filters/processing/libro.processing');

// ==========================
//  TUBERÍAS

// Obtener todos los libros
router.get('/',
    getAllLibros,
    successResponse
);

// Crear libro
router.post('/',
    validarLibro,
    createLibro,
    successResponse
);

// Obtener libro por ID
router.get('/:id',
    validarId,
    getLibroById,
    successResponse
);

// Actualizar libro
router.put('/:id',
    validarId,
    validarLibro,
    updateLibro,
    successResponse
);

// Eliminar libro
router.delete('/:id',
    validarId,
    deleteLibro,
    successResponse
);

module.exports = router;