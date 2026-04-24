const validarAutor = (req, res, next) => {
    const { nombre, apellido, email, password } = req.body;

    // Campos obligatorios
    if (!nombre || !apellido || !email || !password) {
        return res.status(400).json({
            ok: false,
            error: "Todos los campos son obligatorios"
        });
    }

    // Tipo de dato
    if (
        typeof nombre !== "string" ||
        typeof apellido !== "string" ||
        typeof email !== "string" ||
        typeof password !== "string"
    ) {
        return res.status(400).json({
            ok: false,
            error: "Formato de datos inválido"
        });
    }

    // Longitudes
    if (nombre.length < 2 || apellido.length < 2) {
        return res.status(400).json({
            ok: false,
            error: "Nombre y apellido deben tener al menos 2 caracteres"
        });
    }

    // Email más robusto
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({
            ok: false,
            error: "Email inválido"
        });
    }

    // Password segura
    if (password.length < 6) {
        return res.status(400).json({
            ok: false,
            error: "La contraseña debe tener al menos 6 caracteres"
        });
    }

    next();
};

module.exports = { validarAutor };