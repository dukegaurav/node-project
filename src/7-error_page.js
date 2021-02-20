const express = require("express");
const hbs  = require("hbs");
const path = require("path");
const app = express();
const port = 8000


const tempPath = path.join(__dirname,"../template")
const partialPath = path.join(__dirname,"../partials")

//static paths
const staticPath = path.join(__dirname,"../public3")
app.use(express.static(staticPath));

//set view engine
app.set("view engine","hbs")
//app.set("view",tempPath) //to customize defualt view path

//to register partials path in hbs view engine
hbs.registerPartials(partialPath) //partials path

app.get("/",(req,res)=>{
    res.render("index",{
        name:"Gaurav Agrawal"
    });
})

app.get("*",(req,res)=>{
    res.render("404")
})
app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})