require("dotenv").config({ path: `${__dirname}/../.env` });
const jwt = require("jsonwebtoken");

const generarJWT = (uid, name) => {
    const payload = { uid, name };

    
    return new Promise((resolve, reject)=>{
        jwt.sign(payload, process.env["JWT_SECRET"], { expiresIn: "24h" }, (err, token) => {
            if(err) return reject(err);
            return resolve(token);
        });
    });
};

module.exports = {
    generarJWT
};