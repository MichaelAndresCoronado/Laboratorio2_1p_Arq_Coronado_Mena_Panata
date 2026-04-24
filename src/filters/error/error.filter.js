const errorHandler = (err, req, res, next) => {
    console.error("Error:", err.message);

    res.status(err.status || 500).json({
        ok: false,
        error: err.message || "Error interno del servidor",
        details: process.env.NODE_ENV === "development" ? err.stack : undefined
    });
};

module.exports = { errorHandler };