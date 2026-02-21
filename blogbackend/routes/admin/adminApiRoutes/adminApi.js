const express = require("express");
const route = express.Router();
const adminApiUserController = require("../../../controllers/admin/adminApiController/adminApiUserController");
const adminCategoryApiController = require("../../../controllers/admin/adminApiController/adminApiCategoryController");
const adminApiPostController = require("../../../controllers/admin/adminApiController/adminApiPostController");
const auth = require("../../../middleware/auth");

route.post("/api/loginAdmin", adminApiUserController.loginAdmin);
route.post("/api/registerAdmin", adminApiUserController.registerAdmin);
route.get("/api/logOut", adminApiUserController.logOut);
route.get("/api/emailVerifying/:token", adminApiUserController.verifyingEmail);

route.get("/api/dashboard", adminApiPostController.dashboard);
route.post("/api/createBlog", adminApiPostController.createBlog);
route.get("/api/blogStatusChange/:_id",  adminApiPostController.blogStatusChange);
route.get("/api/viewBlog/:_id",  adminApiPostController.viewBlog);
route.get("/api/allBlogs",  adminApiPostController.allBlogs);
route.post("/api/updateBlog/:_id",  adminApiPostController.updateBlog);
route.get("/api/deleteBlog/:_id", adminApiPostController.deleteBlog);
route.get("/api/searchBlog", adminApiPostController.searchBlog);

route.post("/api/createCategory",  adminCategoryApiController.createCategory);
route.get("/api/deleteCategory/:_id", adminCategoryApiController.deleteCategory);
route.post("/api/updateCategory/:_id", adminCategoryApiController.updateCategory);
route.get("/api/allCategories", adminCategoryApiController.allCategories);
route.get("/api/searchCategory", adminCategoryApiController.searchCategory);

module.exports = route;