const express = require('express');
const profileRouter = express.Router();
const { userAuth } = require("../middlewares/auth");
const { validateEditProfileData } = require("../utils/validation");

profileRouter.get("/profile/view", userAuth , async (req,res) => {
  try {

    const user = req.user;

    res.send(user);
  } catch (err){
    res.status(400).send("ERROR: " + err.message);
  }
});

profileRouter.patch("/profile/edit", userAuth , async (req,res) => {
   try{
      if(!validateEditProfileData(req)){
        throw new Error("Invalid Edit Request");
      }
      
      const loggedInUser = req.user;
      
      Object.keys(req.body).forEach((key) => (loggedInUser[key] = req.body[key]));

      await loggedInUser.save();

      res.json({
        message: `${loggedInUser.firstName}, your profile updated Successfully`,
        data: loggedInUser,
      });


   } catch (err) {
     res.status(400).send("ERROR: " + err.message);
   }
});

profileRouter.patch("/profile/password", userAuth, async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;

    // Validate input
    if (!oldPassword || !newPassword) {
      throw new Error("Both old and new passwords are required");
    }

    const user = req.user;

    // Check if old password is correct
    const isPasswordValid = await bcrypt.compare(oldPassword, user.password);
    if (!isPasswordValid) {
      throw new Error("Old password is incorrect");
    }

    // Check if new password is strong enough
    const validator = require("validator");
    if (!validator.isStrongPassword(newPassword)) {
      throw new Error("Please enter a strong password");
    }

    // Hash new password
    const passwordHash = await bcrypt.hash(newPassword, 10);
    user.password = passwordHash;

    await user.save();
    res.send("Password updated successfully!");
  } catch (err) {
    res.status(400).send("ERROR: " + err.message);
  }
});


module.exports = profileRouter;