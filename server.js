const express = require("express");
const blogRouter = require("./routes/blogRouter");
const app = express();
const handlebars = require("express-handlebars");
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://ertugrul:ert.blog.2021@main.fiubi.mongodb.net/blog?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    app.listen(5000, () => console.log("Server working !"));
  })
  .catch((err) => console.error(err));

app.engine("handlebars", handlebars());
app.set("view engine", handlebars);

app.use("/", blogRouter);
