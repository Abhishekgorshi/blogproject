const express = require("express");
const route = express.Router();
const userController = require("../../controllers/admin/userController");
const categoryController = require("../../controllers/admin/categoryController");
const postController = require("../../controllers/admin/postController");
const auth = require("../../middleware/auth");
const multer = require("../../middleware/img");

route.get("/admin", userController.login);
route.get("/register", userController.register);
route.post("/loginAdmin", userController.loginAdmin);
route.post("/registerAdmin", userController.registerAdmin);
route.get("/logOut", userController.logOut);
route.get("/emailVerifying/:token", userController.verifyingEmail);

route.get("/dashboard",auth, postController.dashboard);
route.get("/addBlog",auth, postController.addBlog);
route.post("/upload/:_id",auth, postController.saveBlogImage);
route.post("/createBlog",auth, multer.single("image"), postController.createBlog);
route.get("/blogStatusChange/:_id",auth, postController.blogStatusChange);
route.get("/viewBlog/:_id",auth, postController.viewBlog);
route.get("/allBlogs",auth, postController.allBlogs);
route.get("/editBlog/:_id",auth, postController.editBlog);
route.post("/updateBlog/:_id",auth,multer.single("image"), postController.updateBlog);
route.get("/deleteBlog/:_id",auth, postController.deleteBlog);
route.get("/searchBlog", postController.searchBlog);

route.get("/addCategory",auth, categoryController.addCategory);
route.post("/createCategory",auth, categoryController.createCategory);
route.get("/changeStatus/:_id",auth, categoryController.changeStatus);
route.get("/editCategory/:_id",auth, categoryController.editCategory);
route.get("/deleteCategory/:_id",auth, categoryController.deleteCategory);
route.post("/updateCategory/:_id",auth, categoryController.updateCategory);
route.get("/allCategories",auth, categoryController.allCategories);
route.get("/searchCategory", categoryController.searchCategory);

module.exports = route;