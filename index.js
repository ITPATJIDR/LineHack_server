const express = require("express")
const app = express()
const port = process.env.PORT || 5001
const dotenv = require("dotenv")
const cors = require("cors")

dotenv.config()

app.use(cors({ origin: ["http://localhost:3000","https://line-hack-client.vercel.app"], credentials: true }))
app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.use("/user", require("./routers/userRouter"))
app.use("/shop", require("./routers/shopRouter"))
app.use("/service", require("./routers/serviceRouter"))
app.use("/camp", require("./routers/campRouter"))

app.get("/", (req, res) => {
    res.send("hi")
})

app.use(function(req,res,next) {
res.header('Access-Control-Allow-Credentials', 'true');
res.header('Access-Control-Allow-Origin', "*");
res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
if ('OPTIONS' == req.method) {
     res.send(200);
 } else {
     next();
 }
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
