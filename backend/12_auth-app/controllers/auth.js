const { response, request } = require("express");
const bcrypt = require("bcryptjs");


const User = require("../models/User");
const { generarJWT } = require("../helpers/jwt");

const register = async (req = request, res = response) => {

    try {
        const user = new User(req.body);
        user.password = await bcrypt.hashSync(user.password, await bcrypt.genSaltSync());

        const token = await generarJWT(user._id, user.name);

        await user.save();
        return res.json({ ok: true, user, token });
    } catch (error) {
        return res.status(400).json({ ok: false, error });
    };
};

const login = async (req = request, res = response) => {
    try {

        const user = await User.findOne({ email: req.body.email });
        if(!user) throw { message: "No existe el usuario" };

        const validPassword = await bcrypt.compareSync(req.body.password, user.password);
        if(!validPassword) throw { message: "Contraseña incorrecta" };

        const token = await generarJWT(user._id, user.name);
        return res.json({ ok: true, token });
    } catch (error) {
        return res.status(400).json({ ok: false, error });
    };
};

const getUser = async (req = request, res = response) => {

    try {
        const user = await User.findById(req.user._id);
        const token = await generarJWT(user._id, user.name);


        return res.json({ ok: true, user, token });
    } catch (error) {
        return res.status(400).json({ ok: false, error });
    }

};


module.exports = {
    register,
    login,
    getUser
}