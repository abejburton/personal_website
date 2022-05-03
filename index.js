console.log("This is my personal website");

const express = require("express");

let app = express(); 

var path = require('path');

const port = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res) => {      
    res.sendFile(path.join(__dirname + '/index.html')); 
});
app.get("/papers/uvx.pdf", (req,res) => {
    res.sendFile(path.join(__dirname + '/papers/uvx.pdf'))
});
app.get("/papers/housing.pdf", (req,res) => {
    res.sendFile(path.join(__dirname + '/papers/housing.pdf'))
});
app.get("/papers/shuttle.pdf", (req,res) => {
    res.sendFile(path.join(__dirname + '/papers/shuttle.pdf'))
});
app.get("/papers/endowment.pdf", (req,res) => {
    res.sendFile(path.join(__dirname + '/papers/endowment.pdf'))
});
app.get("/papers/prediction.pdf", (req,res) => {
    res.sendFile(path.join(__dirname + '/papers/prediction.pdf'))
});
app.get("/papers/state.pdf", (req,res) => {
    res.sendFile(path.join(__dirname + '/papers/state.pdf'))
});

app.listen(port, () => console.log("Website started"));