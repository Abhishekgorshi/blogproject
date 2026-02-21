const userModel = require("../models/adminUser");

module.exports = async(req,res,next) => {
  try{
    if(!req.session.user){
     return res.redirect("/");
    }
    next();
  }
  catch(error){
    res.send("fail to apply session auth"+error);
  }
}