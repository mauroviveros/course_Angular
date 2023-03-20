require("dotenv").config({ path: `${__dirname}/.env` });

const colors    = require("colors");
const cors      = require("cors");
const express   = require("express");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", require("./routes/auth"));

app.listen(process.env["PORT"], () => {
    console.log(colors.yellow(`http://localhost:${process.env["PORT"]}`));
});