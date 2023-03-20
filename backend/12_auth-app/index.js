const colors = require("colors");
const express = require("express");

const app = express();


app.get("/", (req, res) => {
    res.json({ ok: true, message: "Todo salio Bien" });
});

app.use("/api", require("./routes/auth"));

app.listen(4000, () => {
    console.log(colors.yellow(`http://localhost:4000`));
});