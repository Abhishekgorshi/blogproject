const categoryModel = require("../../models/Category");

exports.allCategories = async(req,res) => {
  try{
    const categories = await categoryModel.find();
res.render("client/allCategories",{categories:categories});
  }
  catch(error){
res.send("fail to load all categories"+error);
  }
}

exports.searchCategory = async(req,res) => {
  try{
const query = req.query.s;
const categories = await categoryModel.find({
  name:{$regex:query, $options:"i"}
});
res.render("client/searchCategory",{category:categories,query:query})
  }
  catch(error){
res.send("filed to apply search"+error);
  }
}
