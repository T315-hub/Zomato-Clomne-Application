import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "users",
    },
    orderDetails: [
      {
        food: [
          {
            details: { type: mongoose.Types.ObjectId, ref: "foods" },
            quantity: { type: number, required: true },
          },
        ],
        payMode: { type: String, required: true },
        status: { type: string, default: "placed" },
        paymentDetails: {
          itemTotal: { type: number, required: true },
          promo: { type: number, required: true },
          tax: { type: number, required: true },
          razorPay_payment_id: { type: string, required: true },
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const OrderModel = mongoose.Schema("orders", OrderedSchema);
