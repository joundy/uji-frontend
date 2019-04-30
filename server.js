const express = require("express")
const path = require("path")

const app = express()

app.disable("x-powered-by")
app.use(express.static(path.join(__dirname, "/build")))

app.get("*", (res) =>{
    res.sendFile(path.join(__dirname+"/build/index.html"))
})

const port = process.env.PORT || 5000
app.listen(port)

console.log("App is listening on port " + port)