const { response } = require("express");
const { validationResult } = require("express-validator");

const validarCampos = (req, res = response, next) => {
    const errors = validationResult(req);

    try {
        if(!errors.isEmpty()) throw errors;
        return next();
    } catch (error) {
        return res.status(400).json({ ok: false, errors: errors.mapped() });
    };
};

module.exports = {
    validarCampos
};