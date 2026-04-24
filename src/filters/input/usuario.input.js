const validarUsuario = (req, res, next) => {
    const { nombre, apellido, email, password } = req.body;

    if (!nombre || !apellido || !email || !password) {
        return res.status(400).json({
            ok: false,
            error: "Todos los campos son obligatorios"
        });
    }

    // Tipos
    if (
        typeof nombre !== "string" ||
        typeof apellido !== "string" ||
        typeof email !== "string" ||
        typeof password !== "string"
    ) {
        return res.status(400).json({
            ok: false,
            error: "Formato inválido"
        });
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({
            ok: false,
            error: "Email inválido"
        });
    }

    // Password
    if (password.length < 6) {
        return res.status(400).json({
            ok: false,
            error: "Contraseña muy corta"
        });
    }

    next();
};

module.exports = { validarUsuario };