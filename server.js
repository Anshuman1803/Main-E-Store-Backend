const {mongooseConnection} = require("./config/mongooseConnection")
const productRouter = require("./Router/productRouter")
const userRouter = require("./Router/userRouter")
const adminRouter = require("./Router/adminRouter")
const express = require("express");
const cors = require("cors");
const dotENV = require("dotenv");

dotENV.config();


const PORT__NUBMER = process.env.port;
const appServer = express();

appServer.use(express.json());
appServer.use(cors({
    origin: "*"
}));

appServer.use('/api', productRouter);
appServer.use("/api/user", userRouter)
appServer.use("/api/admin", adminRouter);


appServer.listen(PORT__NUBMER, async () => {
    try {
        await mongooseConnection();
        console.log(`SERVER STARED  : http://localhost:${PORT__NUBMER}`);
    } catch (err) {
        console.log(`SOMETHING WENT WRONG : ${err}`);
    }
});

