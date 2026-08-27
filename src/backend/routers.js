import db from "./database.js";

export const getUser = async (req, res) => {
  try {
    const [results] = await db.query("SELECT * FROM users");
    res.json(results);
  } catch (error) {
    console.error("ERROR MYSQL:", error);

    res.status(500).json({
      message: "Gagal mengambil data",
      error: error.message,
    });
  }
};
export const getSnack = async (req, res) => {
  try {
    const [results] = await db.query("SELECT * FROM snacks_room");
    res.json(results);
  } catch (error) {
    console.error("ERROR MYSQL:", error);

    res.status(500).json({
      message: "Gagal mengambil data",
      error: error.message,
    });
  }
};
