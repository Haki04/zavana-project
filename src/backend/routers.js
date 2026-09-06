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

// pesanan

export const postOrders = async (req, res) => {
  try {
    const [{ room, items, status, uu_id, place }] = req.body;
    await db.query(
      `INSERT INTO orders (uu_id, order_room, order_items, order_status, item_code, place_to_eat) VALUES (?,?,?,?,?,?)`,
      [uu_id, room, JSON.stringify(items), status, "ktn", place],
    );
    res.status(201).json({
      success: 201,
      message: "berhasil order",
    });
  } catch (error) {
    console.error("ERROR MYSQL:", error);

    res.status(500).json({
      message: "Gagal mengambil data",
      error: error.message,
    });
  }
};

export const getOrders = async (req, res) => {
  try {
    const [results] = await db.query(
      "SELECT order_room, order_items, order_status, uu_id, place_to_eat FROM orders",
    );

    res.status(200).json({
      message: "menambahkan data orders berhasil",
      data: results,
    });
  } catch (error) {
    res.status(500).json({
      message: "gagal mengambil data",
      error: error.message,
    });
  }
};

export const updateOrders = async (req, res) => {
  try {
    const [results] = await db.query(
      "UPDATE orders SET order_status = ? WHERE uu_id = ?",
      [req.body.status, String(req.body.uu_id)],
    );

    console.log(results);

    results.affectedRows > 0
      ? res.json({
          status: 201,
          message: "berhasil ",
        })
      : console.log("gagal");
  } catch (error) {
    console.log(error);
    res.json({
      message: "gagal  memproses",
    });
  }
};

// inventory
export const postInventory = async (req, res) => {
  try {
    const [
      {
        name_item,
        jenis_item,
        report_item,
        total_item,
        satuan_item,
        extra_coment,
      },
    ] = req.body;
    const [results] = await db.query(
      `INSERT INTO inventory (name, type, reporting, total, satuan, coment) VALUES (?, ?, ?, ?, ?, ?)`,
      [
        name_item,
        jenis_item,
        report_item,
        total_item,
        satuan_item,
        extra_coment,
      ],
    );

    console.log(results);

    if (results) {
      res.status(201).json({
        success: true,
        message: "berhasil do inventory",
      });
    } else {
      console.log("gagal");
    }
  } catch (error) {
    console.log(error);
  }
};
