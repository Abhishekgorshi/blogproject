const postModel = require("../../models/Post");
const categoryModel = require("../../models/Category");
const multer = require("multer");

exports.dashboard = async(req,res) => {
  try{
  const blog = await postModel.find().populate("category");
  const blogsCount = await postModel.countDocuments();
  const categoriesCount = await categoryModel.countDocuments();
  
res.render("admin/dashboard",{totalBlog:blogsCount,totalCategories:categoriesCount,index:1,lists:blog,layout:"layout/admin"});
  }
  catch(error){
res.send("failed to load dashboard"+error);
  }
}

exports.addBlog = async(req,res) => {
  try{
    const category = await categoryModel.find();
res.render("admin/blogAdd",{span:"",category:category,layout:"layout/admin"});
  }
  catch(error){
res.send("failed to load dashboard"+error);
  }
}

exports.saveBlogImage = (req,res) => {
  
}

exports.createBlog = async(req,res) => {
  try{
    // console.log("rrequest",req);
    const {title,description,category} = req.body;
    const image = req.file ? req.file.filename : null;
    const categories = await categoryModel.find();

    if(!title || title==""){
      return res.render("admin/blogAdd", {span:"title is not valid",category:categories,layout:"layout/admin"});
    }
    if(!description || description==""){
      return res.render("admin/blogAdd", {span:"description is not valid",layout:"layout/admin",category:categories});
    }
    if(!category ){
      return res.render("admin/blogAdd", {span:"category is not valid",category:categories,layout:"layout/admin"});
    }
    if(!image ){
      return res.render("admin/blogAdd", {span:"image path is not valid",category:categories,layout:"layout/admin"});
    }
    await postModel.create({
      title,
      description,
      category,
      image
    })
    res.redirect("/dashboard");
  }
  catch(error){
    // res.send(error);
res.send("failed to load dashboard"+error);
  }
}

exports.editBlog = async(req,res) => {
  try{
    const id =req.params._id;
    const document = await postModel.findById(id);
    const categories = await categoryModel.find();
  res.render("admin/editBlog", {span:"",post:document,layout:"layout/admin",category:categories})
  }
  catch(error){
res.send("failed to load edit Blog form"+error);
  }
}

exports.updateBlog = async(req,res) => {
  try{
    const {title,description,category} = req.body;
    const postData = {title,description,category,image:req.file.filename};
    
    const id = req.params._id;
     const document = await postModel.findById(id);
    const categories = await categoryModel.find();
    if(!title || title==""){
      return res.render("admin/editBlog", {span:"title is not valid", post:document,layout:"layout/admin",category:categories});
    }
    if(!description || description==""){
      return res.render("admin/editBlog", {span:"description is not valid",layout:"layout/admin",post:document,category:categories});
    }
     if(!category ){
      return res.render("admin/editBlog", {span:"category is not valid",layout:"layout/admin",post:document,category:categories});
    }
    console.log(req.file.filename)
     await postModel.findByIdAndUpdate(id,postData);
     res.redirect("/dashboard");
  }
  catch(error){
res.send("failed to load dashboard"+error);
  }
}

exports.deleteBlog = async(req,res) => {
  try{
    const id = req.params._id;
     await postModel.findByIdAndDelete(id);
     res.redirect("/dashboard");
  }
  catch(error){
res.send("failed to load dashboard"+error);
  }
}

exports.viewBlog = async(req,res) => {
  try{
const id = req.params._id;
const blog = await postModel.findById(id).populate("category");
res.render("admin/fullBlog", {blog:blog,layout:"layout/admin"}); 
  }
  catch(error){
res.send("failed to view full blog"+error);
  }
}

exports.allBlogs = async(req,res) => {
  try{
    const posts = await postModel.find().populate("category");
res.render("admin/fullBlogs",{blog:posts,layout:"layout/admin"});
  }
  catch(error){
res.send("fail to load category form"+error);
  }
}

exports.blogStatusChange = async(req,res) => {
  try{
const id = req.params._id;
const blog = await postModel.findById(id);
await postModel.findByIdAndUpdate(id,{
  status: blog.status === 1 ? 0 : 1
});
res.redirect("/allBlogs");
  }
  catch(error){
res.send("failed to change status"+error )
  }
}

exports.searchBlog = async(req,res) => {
  try{
const query = req.query.q;
const blog = await postModel.find({title:{ $regex : query, $options: "i"}});

res.render("admin/searchBlog", {blog:blog,query:query,layout:"layout/admin"})
  }
  catch(error){
res.send("failed to search"+error);
  }
}
