import express from "express";

import { UserModel } from "../../database/allModels";
import { validateSignup } from "../../validation/auth.validation";
import { validateSignin } from "../../validation/auth.validation";
import passport from "passport";
const Router = express.Router();

// sorted the issue
Router.post("/signup", async (req, res) => {
  try {
    await validateSignup(req.body.credentials);
    await UserModel.findByEmailAndPhone(req.body.credentials);
    const newUser = await UserModel.create(req.body.credentials);
    const token = newUser.generateJwtToken();
    return res.status(200).json({ token, status: "success", user: newUser });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

Router.post("/signin", async (req, res) => {
  try {
    await validateSignin(req.body.credentials); // for validation in backend
    const user = await UserModel.findByEmailAndPassword(req.body.credentials);
    const token = user.generateJwtToken();
    return res.status(200).json({ token, status: "success" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// google authorization

Router.get(
  "/google",
  passport.authenticate("google", {
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
  })
);

Router.get("/google/callback",passport.authenticate("google",{failureRedirect:"/"}),
(req,res)=>
{
  return res.status(200).json({token:req.session.passport.user.token});
});


export default Router;
