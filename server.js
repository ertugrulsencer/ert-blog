const express = require("express");
const blogRouter = require("./routes/blogRouter");
const app = express();
app.use("/", blogRouter);
app.listen(5000, () => console.log("Server working !"));
