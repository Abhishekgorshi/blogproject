const mongoose = require("mongoose");

const postModel = new mongoose.Schema({
  title: {
    type: String
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "categories",
    required: true
  },
  image:{
    type: String,
    required:true
  },
  status: {
    type: Number,
    default: 1,
    required: true
  }
})

module.exports = mongoose.model("posts", postModel);