import express from "express";
import {
  getUser,
  postOrders,
  getOrders,
  updateOrders,
  postInventory,
  loginUser,
  getDataSection,
  getStoks,
} from "./routers.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

// get
app.get("/users/orders", getOrders);
app.get("/users", getUser);
app.get("/inventory", getDataSection);
app.get("/stocks", getStoks);

//post
app.post("/users", getUser);
app.post("/inventory", postInventory);
app.post("/users/login", loginUser);
app.post("/users/orders", postOrders);
app.post("/users/orders/update", updateOrders);

app.listen(3000, () => {
  console.log("server berjalan");
});
