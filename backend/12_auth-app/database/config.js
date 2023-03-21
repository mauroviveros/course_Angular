const mongoose = require("mongoose");

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env["MONGODB_SRV"]);
        console.log("Base de Datos conectada");
    } catch (error) { throw new Error("Error a la hora de inicializar DB"); };
};

module.exports = {
    dbConnection
};