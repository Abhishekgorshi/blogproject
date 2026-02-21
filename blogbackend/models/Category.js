const mongoose = require("mongoose");

const categoryModel = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  status: {
    type: Number,
    default: 1,
    required: true
  }
})

module.exports = mongoose.model("categories", categoryModel);