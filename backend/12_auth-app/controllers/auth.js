const { response, request } = require("express");
const { validationResult } = require("express-validator");

const register = (req = request, res = response) => {
    return res.json({ ok: true, message: "Crear Usuario" });
};

const login = (req = request, res = response) => {
    return res.json({ ok: true, message: "Login Usuario" });
};

const getUser = (req = request, res = response) => {
    return res.json({ ok: true, message: "Obtener Usuario" });
};


module.exports = {
    register,
    login,
    getUser
}