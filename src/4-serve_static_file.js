const path = require("path");
const express = require("express");
const app = express();
const port = 8000

const staticPath = path.join(__dirname,"../public")

app.use(express.static(staticPath))

app.get("/abc",(req,res)=>{
    res.send("Hello from the express.")
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})