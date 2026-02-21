const express = require("express");
const route = express.Router();
const userController = require("../../../controllers/client/clientApiController/clientApiUserController");
const postController = require("../../../controllers/client/clientApiController/clientApiPostController");
const categoryController = require("../../../controllers/client/clientApiController/clientApiCategoryController");

route.post("/api/loginClient", userController.loginClient);
route.post("/api/registerClient", userController.registerClient);
route.get("/api/client/logOut", userController.logOut);
route.get("/api/client/emailVerifying/:token", userController.verifyingEmail);

route.get("/api/client/dashboard", postController.dashboard);
route.get("/api/client/viewBlog/:_id", postController.viewBlog);
route.get("/api/client/allBlogs", postController.allBlogs);
route.get("/api/client/searchBlog", postController.searchBlog);

route.get("/api/client/allCategories", categoryController.allCategories);
route.get("/api/client/searchCategory", categoryController.searchCategory);

module.exports = route;