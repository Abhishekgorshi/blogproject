const categoryModel = require("../../models/Category");

exports.addCategory = async(req,res) => {
  try{
res.render("admin/categoryAdd",{span:"",layout:"layout/admin"});
  }
  catch(error){
res.send("fail to load category form"+error);
  }
}

exports.createCategory = async(req,res) => {
  try{
    const name = req.body.name;
    await categoryModel.create({
    name
    })
    res.redirect("/allCategories");
  }
  catch(error){
res.send("failed to create category"+error);
  }
}

exports.editCategory = async(req,res) => {
  try{
    const id =req.params._id;
    const document = await categoryModel.findById(id);
  res.render("admin/editCategory", {span:"",category:document,layout:"layout/admin"})
  }
  catch(error){
res.send("failed to load edit category form"+error);
  }
}

exports.updateCategory = async(req,res) => {
  try{
    const {name} = req.body;
    const id = req.params._id;
     await categoryModel.findByIdAndUpdate(id,req.body);
     res.redirect("/allCategories");
  }
  catch(error){
res.send("failed to load all categories"+error);
  }
}

exports.deleteCategory = async(req,res) => {
  try{
    const id = req.params._id;
     await categoryModel.findByIdAndDelete(id);
     res.redirect("/allCategories");
  }
  catch(error){
res.send("failed to load dashboard"+error);
  }
}

exports.allCategories = async(req,res) => {
  try{
    const categories = await categoryModel.find();
res.render("admin/allCategories",{categories:categories,layout:"layout/admin"});
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
  res.redirect("/allCategories");
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
res.render("admin/searchCategory",{category:categories,query:query,layout:"layout/admin"})
  }
  catch(error){
res.send("filed to apply search"+error);
  }
}
