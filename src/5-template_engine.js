const express = require("express");
const app = express();
const path = require("path");
//const hbs = require("hbs");
const port = 8000;

//built in middleware
const staticPath = path.join(__dirname, "../public2")

//to set view engine
app.set("view engine", "hbs") //spellings should be same

//app.use(express.static(staticPath))

app.get("/", (req, res) => {
    res.render("index",{
        //key-value pair to change the specific element in html
        name:"Gaurav Agrawal"
    })
})

/* app.get("/", (req, res) => {
    res.send("Hello from the express.")
}) */

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})