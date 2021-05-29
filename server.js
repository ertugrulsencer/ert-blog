const express = require("express");
const app = express();
app.get("/", (req, res) => {
  console.log("It's working !");
  res.status(200).send("It's working !");
});
app.listen(5000, () => console.log("Server working !"));
