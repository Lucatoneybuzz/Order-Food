import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoutes.js";
import userRouter from "./routes/UserRoute.js";
import cartRouter from "./routes/cartRoutes.js";
import "dotenv/config.js";
import orderRouter from "./routes/orderRoutes.js";

//app config

const app = express();
const port = 4000;

//middleware
app.use(express.json());
app.use(cors());

// Db connection
connectDB();

// api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
