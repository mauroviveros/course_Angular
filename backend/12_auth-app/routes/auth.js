const { Router } = require("express");
const { getUser, register, login } = require("../controllers/auth");

const router = Router();

router.get("/user/:_id", getUser);
router.post("/register", register);
router.post("/login", login);


module.exports = router;