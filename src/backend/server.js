import express from "express";
import {
  getUser,
  postOrders,
  getOrders,
  updateOrders,
  postInventory,
} from "./routers.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/users", getUser);
app.get("/users/orders", getOrders);
app.post("/users/orders", postOrders);
app.post("/users/orders/update", updateOrders);
app.post("/inventory", postInventory);

app.listen(3000, () => {
  console.log("server berjalan");
});
