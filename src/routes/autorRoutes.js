const express = require('express');
const router = express.Router();

// INPUT FILTERS 
const { validarAutor } = require('../filters/input/autor.input');
const { validarId } = require('../filters/input/common.input');

//  OUTPUT FILTER 
const { successResponse } = require('../filters/output/response.output');

//  PROCESSING (Integrante 3 )
const {
    getAllAutores,
    createAutor,
    getAutorById,
    updateAutor,
    deleteAutor,
    searchAutores
} = require('../filters/processing/autor.processing');

// Obtener todos
router.get('/',
    getAllAutores,
    successResponse
);

// Crear autor
router.post('/',
    validarAutor,
    createAutor,
    successResponse
);

// Buscar autores
router.get('/buscar',
    searchAutores,
    successResponse
);

// Obtener por ID
router.get('/:id',
    validarId,
    getAutorById,
    successResponse
);

// Actualizar
router.put('/:id',
    validarId,
    validarAutor,
    updateAutor,
    successResponse
);

// Eliminar
router.delete('/:id',
    validarId,
    deleteAutor,
    successResponse
);

module.exports = router;
