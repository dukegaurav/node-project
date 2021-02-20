const express = require("express");
const app =express();
const port = 8000
app.get("/",(req,res)=>{
    res.send("hello")
})

app.get("/about",(req,res)=>{
    res.status(200).send("This is About Page")
})

app.get("/contact",(req,res)=>{
    res.send("This is contact page")
})

app.get("/blog",(req,res)=>{
    res.send("This is my blog")
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})