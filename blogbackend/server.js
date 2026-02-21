const express = require("express");
require("dotenv").config();
const expressLayouts = require("express-ejs-layouts");
const server = express();
const routes = require("./routes/index");
const path =require("path");
const db = require("./config/db.js");
const session = require("express-session");


db();
server.use(session({
  secret:"mysecretkey",
  resave:false,
  saveUninitialized:false
}))
server.set("views", path.join(__dirname,"views"));
server.use(express.static(path.join(__dirname,"public")))
server.set("view engine", "ejs");

server.use(express.urlencoded({extended:true}));
server.use(express.json());

server.use(expressLayouts);
server.set("layout", "layout/client");

server.use("/", routes);

server.listen(8000, () => {
  console.log("server is running on port 8000");
});