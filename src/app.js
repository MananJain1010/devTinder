const express = require("express");

const app = express();

app.use("/hello", (req,res) => {
    res.send("Hello Hello");
});

app.use("/test", (req,res) => {
    res.send("Hello client");
});

app.listen(3000,() => {
    console.log("Server is Successfully listening on port 3000");
});