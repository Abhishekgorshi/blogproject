const postModel = require("../../../models/Post");
const categoryModel = require("../../../models/Category");

exports.dashboard = async(req,res) => {
  try{
  const blog = await postModel.find().populate("category");
  const blogsCount = await postModel.countDocuments();
  const categoriesCount = await categoryModel.countDocuments();
  res.status(200).json({
  success:true,
  message:"this is dashboard",
  blog});
  }
  catch(error){
res.status(401).json({
  message:"failed to load dashboard"+error
  })
}}

exports.createBlog = async(req,res) => {
  try{
    const {title,description,category} = req.body;
    
    const categories = await categoryModel.find();

    await postModel.create({
      title,
      description,
      category
    })
    const dashboard = await postModel.find().populate("category");
    res.status(201).json({
      meassage:"blog created",
      data:dashboard
    });
  }
  catch(error){
res.status(400).json({
  meassage:"failed to create blog"+error
  });
}}


exports.updateBlog = async(req,res) => {
  try{
    const {title,description,category} = req.body;
    const id = req.params._id;
     const document = await postModel.findById(id);
    const categories = await categoryModel.find();
    if(!title || title==""){
      return res.status(401).json({
        message:"invalid title"
      })
    }
    if(!description || description==""){
      return res.status(401).json({
        message:"invalid description"
      })
    }
     if(!category ){
       return res.status(401).json({
        message:"invalid category id"
      })
    }
    
     await postModel.findByIdAndUpdate(id,req.body);
     const data = await postModel.find().populate("category");
     res.status(200).json({
        message:"successfully updated",
        data:data
      })
  }
  catch(error){
 res.status(401).json({
        message:"failed to update"+error
      })
  }
}

exports.deleteBlog = async(req,res) => {
  try{
    const id = req.params._id;
     await postModel.findByIdAndDelete(id);
     const data = postModel.find().populate("category");
     res.status(200).json({
        message:"successfully deleted",
        data:data
      })
  }
  catch(error){
res.status(401).json({
        message:"failed to update"+error
      })
  }
}

exports.viewBlog = async(req,res) => {
  try{
const id = req.params._id;
const blog = await postModel.findById(id).populate("category");
res.status(200).json({
  blog:blog
}) 
  }
  catch(error){
res.status(401).json({
        message:"failed to load blog"+error
      })
  }
}

exports.allBlogs = async(req,res) => {
  try{
    const posts = await postModel.find().populate("category");
res.status(200).json({
  blog:posts
}) 

  }
  catch(error){
res.status(401).json({
        message:"failed to load all blogs"+error
      })
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

res.status(200).json({
  message:"all matched blogs to your search",
  blog:blog
}) 

  }
  catch(error){
res.status(401).json({
  message:"failed to search blogs"+error
})
  }
}
