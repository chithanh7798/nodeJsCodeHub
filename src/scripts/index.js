require('dotenv').config()

import express from 'express'
// const express = require('express');
import configViewEngine from "../configs/viewEngine.js"


const app = express();

configViewEngine(app)
const port = process.env.PORT | 5000;
// app.get('/', function(req, res) {
//     res.send("Rendering file")
// }
app.get ('/', (req, res) => {
    // res.send("hello world")
    // res.sendFile(path.join(__dirname, '../html/index.html'))
    res.render("index.ejs");
})
// app.get('/', function(res, req){
//     res.sendFile(path.join(__dirname, './html/index.html'));
// });

app.listen(port, ()=>{
    console.log(`listening at localhost:${port}`)
})