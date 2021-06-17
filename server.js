require("dotenv").config();
const express = require("express");
const blogRouter = require("./routes/blogRouter");
const app = express();
const handlebars = require("express-handlebars");
const Handlebars = require("handlebars");
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");
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

app.use(express.static("upload"));
app.use(express.static("public"));

app.engine(
  "handlebars",
  handlebars({
    handlebars: allowInsecurePrototypeAccess(Handlebars),
    helpers: {
      ifEqual(arg1, arg2, options) {
        return arg1 == arg2 ? options.fn(this) : options.inverse(this);
      },
    },
  })
);
app.set("view engine", handlebars);

app.use("/", blogRouter);
