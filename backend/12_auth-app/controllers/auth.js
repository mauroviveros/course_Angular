const { response, request } = require("express");
const { validationResult } = require("express-validator");

const User = require("../models/User");

const register = async (req = request, res = response) => {

    try {
        const user = new User(req.body);
        await user.save();
        return res.json({ ok: true, user });
    } catch (error) {
        return res.status(400).json({ ok: false, error });
    };
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