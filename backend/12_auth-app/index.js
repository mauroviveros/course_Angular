require("dotenv").config({ path: `${__dirname}/.env` });

const colors    = require("colors");
const cors      = require("cors");
const express   = require("express");

const { dbConnection } = require("./database/config");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(`${__dirname}/public`));
app.use("/api", require("./routes/auth"));



const main = async () => {
    await dbConnection();
    app.listen(process.env["PORT"], () => {
        console.log(colors.yellow(`http://localhost:${process.env["PORT"]}`));
    });
}

main();