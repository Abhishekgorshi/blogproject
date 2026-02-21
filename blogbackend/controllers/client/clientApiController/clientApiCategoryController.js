const categoryModel = require("../../../models/Category");

exports.allCategories = async(req,res) => {node
  try{
    const categories = await categoryModel.find();
res.status(200).json({
  message:"these are all categories",
  data:categories
});
  }
  catch(error){
res.status(401).json({
  message:"failed to get categories"+error
});
  }
}

exports.searchCategory = async(req,res) => {
  try{
const query = req.query.s;
const categories = await categoryModel.find({
  name:{$regex:query, $options:"i"}
});
res.status(200).json({
  message:"matched categories with your search",
  data:categories
}
)
  }
  catch(error){
res.status(401).json({
  message:"search operatio fail"+error
});
  }
}
