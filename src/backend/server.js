import express from "express";
import { getUser, getOrders } from "./routers.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/users", getUser);
app.get("/orders", getOrders);

app.listen(3000, () => {
  console.log("server berjalan");
});
