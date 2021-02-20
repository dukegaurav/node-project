const express = require("express");
//const hbs  = require("hbs");
const path = require("path");
const requests =require("requests");
const app = express();
const port = 8000

app.get("/",(req,res)=>{
    const cityname = req.query.name
    requests(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=9aa228b07f657c2d90947124448f61d7`)
    .on("data",(chunk)=>{
        const objData = JSON.parse(chunk);
        const arrData = [objData] 
        res.send(`${cityname}'s temperature is ${arrData[0].main.temp} &deg C`)
    })
    .on('end',(err)=>{
        if (err) return console.log('connection closed due to errors', err);
        res.send(err)
    })

})
app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})