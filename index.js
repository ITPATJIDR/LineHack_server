const express = require("express")
const app = express()
const port = process.env.PORT || 5001
const dotenv = require("dotenv")
const cors = require("cors")
const prisma = require('./utils/prisma')
const userRouter = require("./routers/userRouter")

dotenv.config()

app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(cors({ origin: "https://line-hack-client.vercel.app", credentials: true }))

app.use(function(req,res,next) {
res.header('Access-Control-Allow-Credentials', 'true');
res.header('Access-Control-Allow-Origin', req.headers.origin);
res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
if ('OPTIONS' == req.method) {
     res.send(200);
 } else {
     next();
 }
});

app.use("/user", userRouter)
app.use("/shop", require("./routers/shopRouter"))
app.use("/service", require("./routers/serviceRouter"))
app.use("/camp", require("./routers/campRouter"))

app.get("/", (req, res) => {
    res.send("hi")
})
app.post("/test", async (req, res) => {
    const user = await prisma.user.findFirst({
        userId: "Ue65a274e1b57cc99e110bc39b30281d9"
    })
    res.send(user)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
