import express from "express";
import db from "./database.js";
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "hallo haki",
  });
});

app.get("/users", async (req, res) => {
  try {
    const [results] = await db.query("SELECT * FROM user");

    console.log("HASIL:", results);

    res.json(results);
  } catch (error) {
    console.error("ERROR MYSQL:", error);

    res.status(500).json({
      message: "Gagal mengambil data",
      error: error.message,
    });
  }
});

app.listen(3000, () => {
  console.log("server berjalan");
});
