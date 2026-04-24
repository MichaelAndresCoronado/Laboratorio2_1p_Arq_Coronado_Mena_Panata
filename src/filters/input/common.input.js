const validarId = (req, res, next) => {
    const { id } = req.params;

    if (!id || isNaN(id)) {
        return res.status(400).json({
            ok: false,
            error: "ID inválido"
        });
    }

    const numericId = Number(id);

    if (numericId <= 0 || !Number.isInteger(numericId)) {
        return res.status(400).json({
            ok: false,
            error: "El ID debe ser un número entero positivo"
        });
    }

    next();
};

module.exports = { validarId };