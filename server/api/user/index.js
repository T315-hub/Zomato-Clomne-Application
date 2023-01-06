import express from "express";
import { UserModel } from "../../database/allModels";
import passport from "passport";

const Router = express.Router();

/**
 * Route :   /
 * Desc  :   Get all user
 * params:   none
 * Access:   Private
 * Method:   GET
 */

Router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { email, fullName, phoneNumber, address } = req.user;
      return res.json({ user: { email, fullName, phoneNumber, address } });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
);

/**
 * Route :   /:_id
 * Desc  :   Get user data with id
 * params:   id
 * Access:   Public
 * Method:   GET
 */

Router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const getUser = await UserModel.findById(_id);
    if (!getUser)
      return res.status(404).json({ error: "user not found with this id " });
    const { fullName } = getUser;
    return res.json({ user: { fullName } });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/**
 * Route :   /:_id
 * Desc  :   update the user data by their id
 * params:   id
 * Access:   Private
 * Method:   PUT
 */

Router.put(
  "/:_id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { _id } = req.params;
      const { userData } = req.body;
      userData.password=undefined;
      const updateUserData = await UserModel.findById(
        _id,
        {
          $set: userData,
        },
        {
          new: true,
        }
      );

      return res.json({user: updateUserData});
    } catch (error) {
      res.status(500).json({ error: message.error });
    }
  }
);
export default Router;
