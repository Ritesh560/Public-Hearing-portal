const express = require("express")
const cors = require("cors")

const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//handel requests from frontend
app.use("/", require("./router"))

//port
const PORT = process.env.PORT || 8080

//start the server
app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`)
})
