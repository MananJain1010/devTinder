const express = require('express');
const authRouter = express.Router();
const {validateSignUpData} = require("../utils/validation");
const User = require("../models/user");
const bcrypt = require("bcrypt");

authRouter.post("/signup", async (req,res) => {
    // Validation of data
    try {
    validateSignUpData(req);

    // Encrypt the password
    const {firstName, lastName,emailId,password} = req.body;

    const passwordHash = await bcrypt.hash(password,10);

    // creating a new instance of a User Model
   const user = new User({
    firstName,
    lastName,
    emailId,
    password: passwordHash,
   });
   
    const savedUser = await user.save();
    const token = await savedUser.getJWT();

      // Add the token to cookie and send the response back to the user
      res.cookie("token",token,{
        expires: new Date(Date.now() + 8*3600000),
      });
    res.json({message: "User Added successfully", data: savedUser });
   } catch (err) {
    res.status(400).send("ERROR :" + err.message);
   }
});

authRouter.post("/login", async(req,res) =>{
  try {
    const {emailId , password} = req.body;
    
    const user = await User.findOne({emailId: emailId});
    if(!user){
      throw new Error("Invalid Credentials");
    }

    const isPasswordValid = await user.validatePassword(password);

    if(isPasswordValid){

      // Create a JWT Token
      
      const token = await user.getJWT();

      // Add the token to cookie and send the response back to the user
      res.cookie("token",token,{
        expires: new Date(Date.now() + 8*3600000),
      });
      res.send(user);
    }
    else {
      throw new Error("Invalid Credentials");
    }
  }  catch (err) {
    res.status(400).send("ERROR :" + err.message);
   }
})

authRouter.post("/logout", async (req,res) => {
   res.cookie("token", null, {
     expires: new Date(Date.now()),
   });
   res.send("Logout Successfully");
});

module.exports = authRouter;