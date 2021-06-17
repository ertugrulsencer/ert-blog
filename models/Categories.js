const mongoose = require("mongoose");
const Categories = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Categories", Categories);
