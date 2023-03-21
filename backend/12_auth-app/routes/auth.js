const { Router } = require("express");
const { check } = require("express-validator");
const { getUser, register, login } = require("../controllers/auth");

const router = Router();

router.get("/user/:_id", getUser);
router.post("/register", register);
router.post("/login", [
    check("email", "El email es obligatorio").isEmail(),
    check("password", "La contraseña es obligatoria").isLength({ min: 6 })
], login);


module.exports = router;