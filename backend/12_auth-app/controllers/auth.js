const { response, request } = require("express");
const { validationResult } = require("express-validator");

const register = (req = request, res = response) => {
    return res.json({ ok: true, message: "Crear Usuario" });
};

const login = (req = request, res = response) => {
    const errors = validationResult(req);
    try {
        if(!errors.isEmpty()) throw errors;
        return res.json({ ok: true, message: "Login Usuario" });
    } catch (error) {
        return res.status(400).json({ ok: false, errors: errors.mapped() });
    };

};

const getUser = (req = request, res = response) => {
    console.log(req.body);
    return res.json({ ok: true, message: "Obtener Usuario" });
};


module.exports = {
    register,
    login,
    getUser
}