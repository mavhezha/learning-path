const express = require("express")
const app = express()

app.use(logger)

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.get("/users", (req, res) => {
    res.send("User Page");
});

function logger(req, res, next){
    console.log("Logged!");
    next();
}

app.listen(5000, (req,res) => {
    console.log("Server listening to PORT 50000...")
});