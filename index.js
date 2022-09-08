const express = require("express");
const { dbConnect } = require("./config/dbConnect");
const userRouter = require("./routes/user.route")
// const {globalMiddleware} = require("./middlewares/globalMiddleware");

const app = express();

 app.use("/users", userRouter);

app.get("./", (req, res)=> {
    res.status(200).send("server is ready to run")
});
async function start() {
    await dbConnect();
    app.listen(4000, (err) => {
      console.log("server start running https://localhost:4000");
    });
}
start();
