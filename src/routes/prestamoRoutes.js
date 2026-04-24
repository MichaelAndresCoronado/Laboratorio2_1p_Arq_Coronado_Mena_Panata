const express = require('express');
const router = express.Router();

// INPUT FILTERS (TU PARTE)
const { validarPrestamo, validarDevolucion } = require('../filters/input/prestamo.input');
const { validarId } = require('../filters/input/common.input');

// OUTPUT FILTER
const { successResponse } = require('../filters/output/response.output');

//  PROCESSING (Integrante 3)
const {
    crearPrestamo,
    devolverPrestamo
} = require('../filters/processing/prestamo.processing');

// ==========================
//  TUBERÍAS

// Crear préstamo
router.post('/',
    validarPrestamo,
    crearPrestamo,
    successResponse
);

// Devolver préstamo
router.put('/:id/devolucion',
    validarId,
    validarDevolucion,
    devolverPrestamo,
    successResponse
);

module.exports = router;