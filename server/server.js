const express = require("express")
const cors = require("cors")

const app = express()

//middleware
app.use(
  cors({
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//handel requests from frontend
const router = require("./router")
app.use("/", router)

//port
const PORT = process.env.PORT || 8080

//start the server
app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`)
})
