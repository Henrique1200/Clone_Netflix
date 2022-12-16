const express = require("express")
const path = require("path")
const port = 4040

let initialpath = path.join(__dirname, "public")

let app = express ()
app.use(express.static(initialpath))

app.get("/", (req, res) => {
    res.sendFile(path.join(initialPath, "index.html"))
})

app.listen(port, ()=>{
   console.log(`Server start up on port ${port}!`)
})