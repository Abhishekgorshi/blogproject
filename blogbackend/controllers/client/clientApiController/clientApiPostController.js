const postModel = require("../../../models/Post");
const categoryModel = require("../../../models/Category");

exports.dashboard = async(req,res) => {
  try{
  const blogs = await postModel.find().populate("category");
  const blogCount = await postModel.countDocuments();
  const categories = await categoryModel.find();
  const categoryCount = await categoryModel.countDocuments();
  
res.status(200).json({
  success:true,
  data:{blogs,categories,blogCount,categoryCount},
  message:"data fetched successfully"  
})
  }
  catch(error){ console.log("error:"+error)
  res.status(401).json({
  success:false,
  message:"failed to load dashboard"+error
  })
}
}
exports.viewBlog = async(req,res) => {
  try{
const id = req.params.pId;
const blog = await postModel.findById(id).populate("category");
res.status(201).json({
  success:true,
  data:blog,
  message:"data sent successfully"
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
