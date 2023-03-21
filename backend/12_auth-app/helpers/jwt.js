const jwt = require("jsonwebtoken");

const generarJWT = (_id, name) => {
    const payload = { _id, name };

    
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