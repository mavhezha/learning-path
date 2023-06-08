app.use(logger)

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.get("/users", auth, (req, res) => {
    res.send("User Page");
});

function logger(req, res, next){
    console.log("Logged!");
    next();
}

function auth(req, res, next){
    if(req.query.admin === "xavi"){
        next();
    }else{
        res.send("Unauthorized!")
    }
}