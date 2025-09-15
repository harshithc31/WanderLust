const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");

app.get("/getcookies", (req, res) => {
    res.cookie("greet", "hello");
    res.send("sent you some cookies!");
})

app.get("/", (req, res) => {  //basic api
    res.send("Hi, I am root");
});

app.use("/users", users);
app.use("/posts", posts);

app.listen(8080, () => {
    console.log("server is listening to port 8080");
});