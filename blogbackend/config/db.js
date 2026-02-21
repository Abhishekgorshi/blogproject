const mongoose = require("mongoose");

const dbConnection = async (res) => {
try{ 
  await mongoose.connect("mongodb+srv://abhishekgorshi76:02Nov%402002@cluster0.6wd4nug.mongodb.net/blogs");
}
catch(error){
res.send("database connection failed"+error);
} 
}

module.exports = dbConnection;