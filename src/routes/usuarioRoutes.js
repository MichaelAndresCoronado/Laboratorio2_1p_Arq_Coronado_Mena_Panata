const express = require('express');
const router = express.Router();

// INPUT FILTERS (TU PARTE)
const { validarUsuario } = require('../filters/input/usuario.input');
const { validarId } = require('../filters/input/common.input');

// OUTPUT FILTER
const { successResponse } = require('../filters/output/response.output');

// PROCESSING 
const {
    createUsuario,
    getPrestamosByUser
} = require('../filters/processing/usuario.processing');

// ==========================
// TUBERÍAS

// Crear usuario
router.post('/',
    validarUsuario,
    createUsuario,
    successResponse
);

// Obtener préstamos por usuario
router.get('/:id/prestamos',
    validarId,
    getPrestamosByUser,
    successResponse
);

module.exports = router;