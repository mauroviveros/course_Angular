const { Router } = require("express");
const { check } = require("express-validator");
const { getUser, register, login } = require("../controllers/auth");
const { validarCampos } = require("../middlewares/validar-campos");
const { validarJWT } = require("../middlewares/validar-jwt");

const router = Router();

router.get("/user", [validarJWT], getUser);
router.post("/register", [
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").isEmail(),
    check("password", "La contraseña es obligatoria").isLength({ min: 6 }),
    validarCampos
], register);
router.post("/login", [
    check("email", "El email es obligatorio").isEmail(),
    check("password", "La contraseña es obligatoria").isLength({ min: 6 }),
    validarCampos
], login);


module.exports = router;