import express from "express";
import { OrderModel } from "../../database/allModels";
import passport from "passport";
const Router = express.Router();

/**
 * Route :   /
 * Desc  :   get all the order
 * params:   id
 * Access:   Private
 * Method:   GET
 */

Router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { user } = req.user;
      const getOrders = await OrderModel.findOne({ user: user });
      if (!getOrders) {
        return res
          .status(404)
          .json({ error: "NO order for this user found here" });
      }
      return res.json({ orders: getOrders });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

/**
 * Route :   /new
 * Desc  :   all the new order
 * params:   id
 * Access:   Private
 * Method:   PUT
 */

Router.put(
  "/new",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { user } = req;
      const orderDetails = req.body;
      const addNewOrder = await OrderModel.findOneAndUpdate(
        {
          user: user._id,
        },
        {
          $push: {
            orderDetails: orderDetails,
          },
        },
        {
          new: true,
        }
      );
      return res.json({order:addNewOrder});
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
);

export default Router;
