const { response } = require("express");

const register = (req, res = response) => {
    return res.json({ ok: true, message: "Crear Usuario" });
};

const login = (req, res = response) => {
    return res.json({ ok: true, message: "Login Usuario" });
};

const getUser = (req, res = response) => {
    return res.json({ ok: true, message: "Obtener Usuario" });
};


module.exports = {
    register,
    login,
    getUser
}