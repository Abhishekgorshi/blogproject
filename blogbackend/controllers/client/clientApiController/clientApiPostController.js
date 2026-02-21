const postModel = require("../../../models/Post");
const categoryModel = require("../../../models/Category");

exports.dashboard = async(req,res) => {
  try{
  const blog = await postModel.find().populate("category");
  const blogsCount = await postModel.countDocuments();
  const categoriesCount = await categoryModel.countDocuments();
res.status(200).json({
  blog:blog,
  // totalBlogs:blogsCount,
  // totalCategories:categoriesCount,
  
})
  }
  catch(error){
res.status(401).json({
  message:"failed to load dashboard"+error
  })
}
}
exports.viewBlog = async(req,res) => {
  try{
const id = req.params._id;
const blog = await postModel.findById(id).populate("category");
res.status(401).json({
  blog:blog
   })
  }
  catch(error){
res.status(401).json({
  message:"failed to view full blog"+error
  })
}}

exports.allBlogs = async(req,res) => {
  try{
    const posts = await postModel.find().populate("category");
res.status(200).json({
  blog:posts
})
  }
  catch(error){
res.status(401).jspn({
  message:"fail to load category form"+error
  })
}}

exports.searchBlog = async(req,res) => {
  try{
const query = req.query.q;
const blog = await postModel.find({title:{ $regex : query, $options: "i"}}).populate("category");

res.status(200).json({
  blog:blog,query:query,totalBlog:"",totalCategories:""})
  }
  catch(error){
res.status(401).json({
  message:"failed to search"+error
  })
}}
