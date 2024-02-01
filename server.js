const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log("herer");
  // res.status(500).json({hellow:"i am json "})
  // res.download("server.js")
  res.render("index", { text: "world" });
  // res.send("hi")
});

//different routes

const userRouter = require("./routes/users");

app.use("/users", userRouter);

app.listen(5000);
