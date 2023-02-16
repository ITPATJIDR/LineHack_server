const express = require("express")
const app = express()
const port = process.env.PORT || 5001
const dotenv = require("dotenv")
const cors = require("cors")

dotenv.config()

app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(cors({ origin: "*", credentials: true }))

app.use("/user", require("./routers/userRouter"))
app.use("/shop", require("./routers/shopRouter"))
app.use("/service", require("./routers/serviceRouter"))
app.use("/camp", require("./routers/campRouter"))

app.get("/", (req, res) => {
    res.send("hi")
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
