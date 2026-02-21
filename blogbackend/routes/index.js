const adminApiRoute = require("./admin/adminApiRoutes/adminApi");
const clientApiRoute = require("./client/clientApiRoutes/clientApi");
const adminRoute = require("./admin/adminRoute");
const clientRoute = require("./client/clientRoute");
const express = require("express");
const route = express.Router();

route.use("/", clientRoute);
route.use("/", adminRoute);

route.use("/", clientApiRoute);
route.use("/", adminApiRoute);

module.exports = route;