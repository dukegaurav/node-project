const express = require("express");
const app = express();
const port = 8000

app.get("/", (req, res) => {
    const name= req.query.name
    res.send(`Hello i am ${name}`)
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})