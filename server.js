const express = require("express");
const app = express();
app.get("/", (req, res) => {
  console.log("It's working !");
  res.status(200).send("It's working !");
});
app.listen(8000, () => console.log("Server working !"));
