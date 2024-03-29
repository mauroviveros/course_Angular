const { response } = require("express");
const jwt = require("jsonwebtoken");

const validarJWT = async (req, res = response, next) => {
    const token = req.header("x-token");

    try {
        if(!token) throw new Error("Token obligatorio: x-token");
        const payload = jwt.verify(token, process.env["JWT_SECRET"]);

        req.user = payload;

        return next();
    } catch (error) {
        return res.status(401).json({ ok: false, error: {
            message: error.message
        }});
    }
};

module.exports = {
    validarJWT
};
