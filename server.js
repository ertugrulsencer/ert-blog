require("dotenv").config();
const express = require("express");
const blogRouter = require("./routes/blogRouter");
const app = express();
const handlebars = require("express-handlebars");
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(5000, () => console.log("Server working !"));
  })
  .catch((err) => console.error(err));

app.use(express.static("public"));

app.engine("handlebars", handlebars());
app.set("view engine", handlebars);

app.use("/", blogRouter);
