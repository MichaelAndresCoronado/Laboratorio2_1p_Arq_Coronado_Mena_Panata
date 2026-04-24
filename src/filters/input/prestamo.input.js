const validarPrestamo = (req, res, next) => {
    const { usuario_id, libro_id, fecha_prestamo, fecha_devolucion_prevista } = req.body;

    if (!usuario_id || !libro_id || !fecha_prestamo || !fecha_devolucion_prevista) {
        return res.status(400).json({
            ok: false,
            error: "Todos los campos del préstamo son obligatorios"
        });
    }

    // IDs
    if (
        isNaN(usuario_id) || Number(usuario_id) <= 0 ||
        isNaN(libro_id) || Number(libro_id) <= 0
    ) {
        return res.status(400).json({
            ok: false,
            error: "usuario_id o libro_id inválidos"
        });
    }

    // Fechas válidas
    const fechaPrestamo = new Date(fecha_prestamo);
    const fechaPrevista = new Date(fecha_devolucion_prevista);

    if (isNaN(fechaPrestamo) || isNaN(fechaPrevista)) {
        return res.status(400).json({
            ok: false,
            error: "Formato de fecha inválido"
        });
    }

    // Lógica de negocio
    if (fechaPrevista <= fechaPrestamo) {
        return res.status(400).json({
            ok: false,
            error: "La fecha de devolución debe ser posterior al préstamo"
        });
    }

    next();
};

const validarDevolucion = (req, res, next) => {
    const { fecha_devolucion_real } = req.body;

    if (!fecha_devolucion_real) {
        return res.status(400).json({
            ok: false,
            error: "Fecha de devolución requerida"
        });
    }

    const fecha = new Date(fecha_devolucion_real);

    if (isNaN(fecha)) {
        return res.status(400).json({
            ok: false,
            error: "Fecha inválida"
        });
    }

    next();
};

module.exports = { validarPrestamo, validarDevolucion };