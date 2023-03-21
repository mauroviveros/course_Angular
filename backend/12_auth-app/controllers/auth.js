const { response, request } = require("express");
const bcrypt = require("bcryptjs");


const User = require("../models/User");

const register = async (req = request, res = response) => {

    try {
        const user = new User(req.body);
        user.password = await bcrypt.hashSync(user.password, await bcrypt.genSaltSync());

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