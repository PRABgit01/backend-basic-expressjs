const routingjs = require("express");

const basicrouting = routingjs();

basicrouting.get("/", (req, res) => {
  res.send("this is get method ");
});

basicrouting.post("/", (res, req) => {
  res.send("this is post method ");
});

basicrouting.put("/user", (req, res) => {
  res.send("Got a PUT request at /user");
});

basicrouting.delete("/user", (req, res) => {
  res.send("Got a DELETE request at /user");
});


basicrouting.listen(7050);
