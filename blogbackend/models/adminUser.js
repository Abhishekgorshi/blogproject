const mongoose =require("mongoose");

const userModel = new mongoose.Schema({
  name:{
    type:String,
    required:true,
    trim:true
  },
  email:{
    type:String,
    required:true,
    trim:true
  },
  password:{
    type:String,
    required:true,
    trim:true
  },
  emailVerify:{
   type: Boolean,
   default:false,
   required:true
  },
  token:{
    type:String,
    required:true
  }
})

module.exports = mongoose.model("user", userModel);