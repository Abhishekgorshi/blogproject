const categoryModel = require("../../../models/Category");


exports.createCategory = async(req,res) => {
  try{
    const name = req.body.name;
    await categoryModel.create({
    name
    });
    const allCategories = await categoryModel.find();
    res.status(202).json({
      message:"successfully created",
      data:allCategories
    });
  }
  catch(error){
res.status(401).json("failed to create category"+error);
  }
}


exports.updateCategory = async(req,res) => {
  try{
    const {name} = req.body;
    const id = req.params._id;
    const updatedCategory= await categoryModel.findByIdAndUpdate(id,req.body);
     res.status(202).json({
      message:"successfully updated",
      updatedCategory
     });
  }
  catch(error){
res.status(401).json({
  message:"failed to update category"
});
  }
}

exports.deleteCategory = async(req,res) => {
  try{
    const id = req.params._id;
     await categoryModel.findByIdAndDelete(id);
     const allCategories = await categoryModel.find();
     res.status(200).json({
      message:"category deleted successfully",
      data:allCategories
     })
  }
  catch(error){
res.status(401).json({
  message:"failed to delete category"
})
  }
}

exports.allCategories = async(req,res) => {
  try{
    const categories = await categoryModel.find();
  res.status(202).JSON.send(allCategories);;
  }
  catch(error){
res.send("fail to load all categories"+error);
  }
}

exports.changeStatus = async(req,res) => {
  try{
    const id =req.params._id;
  const category = await categoryModel.findById(id);
  category.status = category.status === 1?0 :1;
  await category.save();
  const allCategories = await categoryModel.find();
  res.status(202).JSON.send(allCategories);;
  }
  catch(error){
    res.send("failed to cahnge status"+error);
  }
}

exports.searchCategory = async(req,res) => {
  try{
const query = req.query.s;
const categories = await categoryModel.find({
  name:{$regex:query, $options:"i"}
});
res.status(200).json({
  message:"data as"+query,
  data:categories
})
  }
  catch(error){
res.status(401).json({
  message:"search fail"
})
  }
}
