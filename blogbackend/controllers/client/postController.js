const postModel = require("../../models/Post");
const categoryModel = require("../../models/Category");
const { options } = require("../../routes");

exports.dashboard = async(req,res) => {
  try{
  const blog = await postModel.find().populate("category");
  const blogsCount = await postModel.countDocuments();
  const categoriesCount = await categoryModel.countDocuments();
res.render("client/home",{totalBlog:blogsCount,totalCategories:categoriesCount,index:1,lists:blog});
  }
  catch(error){
res.send("failed to load dashboard"+error);
  }
}

exports.viewBlog = async(req,res) => {
  try{
const id = req.params._id;
const blog = await postModel.findById(id).populate("category");
res.render("client/blog", {blog:blog,layout:false}); 
  }
  catch(error){
res.send("failed to view full blog"+error);
  }
}

exports.allBlogs = async(req,res) => {
  try{
    const posts = await postModel.find().populate("category");
res.render("client/allBlogs",{blog:posts});
  }
  catch(error){
res.send("fail to load category form"+error);
  }
}

exports.searchBlog = async(req,res) => {
  try{
const query = req.query.q;
const blog = await postModel.find({title:{ $regex : query, $options: "i"}}).populate("category");

res.render("client/searchBlog", {blog:blog,query:query,totalBlog:"",totalCategories:""})
  }
  catch(error){
res.send("failed to search"+error);
  }
}
