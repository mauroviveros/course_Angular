const colors    = require("colors");
const express   = require("express");
const cors      = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", require("./routes/auth"));

app.listen(4000, () => {
    console.log(colors.yellow(`http://localhost:4000`));
});