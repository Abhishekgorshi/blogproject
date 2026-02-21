const express = require("express");
const route = express.Router();
const userController = require("../../controllers/client/userController");
const postController = require("../../controllers/client/postController");
const categoryController = require("../../controllers/client/categoryController");

route.get("/", userController.login);
route.get("/client/register", userController.register);
route.post("/loginClient", userController.loginClient);
route.post("/registerClient", userController.registerClient);
route.get("/client/logOut", userController.logOut);
route.get("/client/emailVerifying/:token", userController.verifyingEmail);

route.get("/client/dashboard", postController.dashboard);
route.get("/client/viewBlog/:_id", postController.viewBlog);
route.get("/client/allBlogs", postController.allBlogs);
route.get("/client/searchBlog", postController.searchBlog);

route.get("/client/allCategories", categoryController.allCategories);
route.get("/client/searchCategory", categoryController.searchCategory);

route.get("/client/about.html", userController.about);
route.get("/client/contact.html", userController.contact);
route.get("/client/post.html", userController.sample);

module.exports = route;