const express = require("express");
const blogRouter = require("./routes/blogRouter");
const app = express();
const handlebars = require("express-handlebars");

app.engine("handlebars", handlebars());
app.set("view engine", handlebars);
app.use("/", blogRouter);
app.listen(5000, () => console.log("Server working !"));
