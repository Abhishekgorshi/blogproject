const userModel = require("../../../models/clientUser");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

exports.loginClient = async(req,res) => {
  try{
const {email,password} =req.body;
if(!email || email==""){
  return res.render("client/login", {span:"",layout:false});
}
if(!password || password==""){
  return res.render("client/login", {span:"",layout:false});
}
const user = await userModel.findOne({email});
if(!user){
  return res.render("client/login", {span:"user is not registered",layout:false});
}
const verified = await bcrypt.compare(password,user.password)
if(!verified){
  return res.render("client/login", {span:"password is incorrect",layout:false});
}
const emailVerified = user.emailVerify;
if(emailVerified == false){
  return res.render("client/login", {span:"please verify your email",layout:false});
}
req.session.user = user._id;
res.redirect("/client/dashboard");
  }
  catch(error){
res.send("fail to login"+error);
  }
}

exports.registerClient = async(req,res) => {
  try{
const {name,email,password} =req.body;
const token = await crypto.randomBytes(32).toString("hex");
if(!name || name.length<3){
  return res.render("client/register", {span:"please enter vaild name",layout:false});
}
if(!email || email==""){
  return res.render("client/register", {span:"please enter vaild email",layout:false});
}
if(!password || password==""){
  return res.render("client/register", {span:"please enter valid password",layout:false});
}
const user = await userModel.findOne({email});
if(user){
  return res.render("client/register", {span:"user already registered",layout:false});
}
const hashPassword = await bcrypt.hash(password,10);
const emailVerify = false;
const newUser = {name,email,password:hashPassword,emailVerify,token:token};
const verifyLink = `http://localhost:3000/emailVerifying/${token}`
await userModel.create(newUser);
console.log(process.env.MAIL_HOST, process.env.MAIL_PORT);
await transporter.sendMail({
  from:"abhi@76",
  to:email,
  subject:"just testing",
  html:`<h2>verify your email is valid </h2>
    <a href="${verifyLink}">click here</a>`
}
);

res.redirect("/client");
  }
  catch(error){
res.send("fail to login"+error);
  }
}

exports.logOut =(req,res) => {
  try{
 req.session.destroy()
  res.redirect("/client");
  }
  catch(error){
    res.send("failed to log out"+error);
  }
}

exports.verifyingEmail = async(req,res) => {
  try{
const token = req.params.token;
const user = await userModel.findOne({token});
await userModel.updateOne({token},{token:null,
  emailVerify:true
});
  res.redirect("/client");
  }
  catch(error){
res.send("failed to load login"+error);
  }
}
