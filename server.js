require("dotenv").config();
const PORT = process.env.PORT || 8080;


const express = require("express");
const app = express();
app.use(express.json());

const Connection = require("./configs/db");
const userRouter = require("./routes/Users/user.route");
const todoRouter = require("./routes/Todos/Todo");


app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/user", userRouter);
app.use("/todo", todoRouter);

app.listen(PORT, async (req, res) => {
  Connection();
  console.log(`Running PORT : ${PORT}`);
});
