const validarLibro = (req, res, next) => {
    const { titulo, isbn, stock, autor_id } = req.body;

    if (!titulo || !isbn || !autor_id) {
        return res.status(400).json({
            ok: false,
            error: "Campos requeridos: titulo, isbn, autor_id"
        });
    }

    // Tipos
    if (
        typeof titulo !== "string" ||
        typeof isbn !== "string"
    ) {
        return res.status(400).json({
            ok: false,
            error: "Título e ISBN deben ser texto"
        });
    }

    // Longitud título
    if (titulo.length < 2) {
        return res.status(400).json({
            ok: false,
            error: "El título es demasiado corto"
        });
    }

    // ISBN validación simple (10 o 13 dígitos)
    const isbnRegex = /^(97(8|9))?\d{9}(\d|X)$/;
    if (!isbnRegex.test(isbn)) {
        return res.status(400).json({
            ok: false,
            error: "ISBN inválido"
        });
    }

    // Autor ID
    if (isNaN(autor_id) || Number(autor_id) <= 0) {
        return res.status(400).json({
            ok: false,
            error: "autor_id inválido"
        });
    }

    // Stock
    if (stock !== undefined) {
        if (isNaN(stock) || Number(stock) < 0) {
            return res.status(400).json({
                ok: false,
                error: "Stock debe ser un número positivo"
            });
        }
    }

    next();
};

module.exports = { validarLibro };