const express = require("express");
const app = express();
const path = require("path")

const port = 8080; 

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"/ views"))

app.get("/", (req,res)=>{
    // res.send("this is home")
    // res.render("home.ejs")
})

app.get("/rolldice", (req,res)=>{
    let diceValue =Math.floor(Math.random()*6) +1
    res.render("rolldice.ejs", {num:diceValue})
})

app.get("/ig/username:", (req, res)=>{
    const instaData = require("./data.json");
    let { username } = req.params;
    let data = instaData[username];
    console.log(instaData)
    res.render("insta.ejs", { data })
})

app.listen(port, ()=>{
    console.log("app is listening")
})