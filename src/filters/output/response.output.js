const successResponse = (req, res) => {
    res.status(req.statusCode || 200).json({
        ok: true,
        message: req.message || "Operación exitosa",
        data: req.pipelineData || null
    });
};

module.exports = { successResponse };