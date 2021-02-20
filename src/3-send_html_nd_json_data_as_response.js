const express = require("express")
const app = express();

const port = 8000
//1st methd to send html res
app.get("/",(req,res)=>{
    res.send("<h1>This is Home Page</h1>")
})
//2nd method (for multi line html)
app.get("/contact",(req,res)=>{
    res.write("<h1>This is line 1</h1>")
    res.write("<h1>This is line 2</h1>")
    res.send(); // equivalent to .end() method in core node module.
})
//1st method to send json response
app.get("/api",(req,res)=>{
    res.send([{id:0,name:"Gaurav",email:"abc@xyz.com"},{id:1,name:"Sumit",email:"abc2@xyz.com"}])
})
//2nd method to send json response
app.get("/api2",(req,res)=>{
    res.json([{id:0,name:"Gaurav",email:"abc@xyz.com"},{id:1,name:"Sumit",email:"abc2@xyz.com"}])
})
//both mehtod to send json are identical when an object or array passed. but .json() will also
//convert non-objects such null and undefined, which are not valid json
app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})