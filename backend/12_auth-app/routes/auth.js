const { Router } = require("express");

const router = Router();

router.get("/user/:_id",    (req, res) => { res.json({ ok: true, message: "Obtener Usuario" }) });
router.post("/register",    (req, res) => { res.json({ ok: true, message: "Crear Usuario" }) });
router.post("/login",       (req, res) => { res.json({ ok: true, message: "Login Usuario" }) });


module.exports = router;