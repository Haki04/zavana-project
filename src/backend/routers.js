import db from "./database.js";
import bcrypt from "bcrypt";

// users
export const getUser = async (req, res) => {
  try {
    const name = req.body?.name ?? req.query?.name;
    const [results] = await db.query(
      "SELECT * FROM users WHERE user_name = ?",
      [name],
    );

    res.json({
      verify: true,
      data: results,
    });
  } catch (error) {
    console.error("ERROR MYSQL:", error);

    res.status(500).json({
      message: "Gagal mengambil data",
      error: error.message,
    });
  }
};

export const loginUser = async (req, res) => {
  const { name, password } = req.body;
  const [[results]] = await db.query(
    "SELECT user_name, user_password,user_level FROM users WHERE user_name = ?",
    [name],
  );

  if (await bcrypt.compare(password, results.user_password)) {
    return res.json({
      verify: true,
      data: results.user_name,
    });
  } else {
    console.log("gagal login ");
    return res.json({ verify: false });
  }
};

// pesanan

export const postOrders = async (req, res) => {
  try {
    const [{ room, items, status, uu_id, place }] = req.body;
    await db.query(
      `INSERT INTO orders (uu_id, order_room, order_items, order_status, item_code, place_to_eat) VALUES (?,?,?,?,?,?)`,
      [uu_id, room, JSON.stringify(items), status, "food", place],
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
      `SELECT order_room, order_items, order_status, uu_id, place_to_eat FROM orders ORDER BY CASE
      WHEN order_status = 'in proses' THEN 1
      WHEN order_status = 'order' THEN 2  
      WHEN order_status = 'selesai' THEN 3
      ELSE 4
      END`,
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

    const [cek] = await db.query(
      `SELECT name,total FROM inventory WHERE name = ?`,
      [name_item],
    );
    if (cek.length == 0) {
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

      if (results) {
        res.json({
          status: 200,
          message: "berhasil do inventory",
        });
      } else {
        console.log("gagal");
      }
    } else {
      const [total_old] = cek;
      let total_new = parseInt(total_old.total) + parseInt(total_item);
      const [results] = await db.query(
        `UPDATE inventory SET total = ? WHERE name = ?`,
        [total_new, name_item],
      );

      console.log(results);
      if (results.affectedRows > 0) {
        res.json({
          status: 201,
          message: "stock sudah diperbaharui",
        });
      }
    }
  } catch (error) {
    res.json({
      status: 500,
    });
  }
};
