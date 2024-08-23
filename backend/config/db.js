import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://lucatoney23:food@cluster0.dnlc3it.mongodb.net/order-food-app"
    )
    .then(() => console.log("Db Connected"));
};
