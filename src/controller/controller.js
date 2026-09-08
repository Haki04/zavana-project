// cek session login

export const cekSession = () => {
  const cookies = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith("name="))
    .split("=")[1];
  // return cookies ?? false;
  return cookies ? true : false;
};

// barang.js

export const tombol_barang = (e) => {
  if (e == "tambah") {
    console.log(`berhasil ${e}`);
  } else if (e == "kurangi") {
    console.log(`berhasil ${e}`);
  } else if (e == "terjual") {
    console.log(`berhasil ${e}`);
  } else {
    console.log("gagal");
  }
};

// pesanan.js

export const pesanan_selesai = (e) => {
  if (e == "selesai") {
    alert(e);
  }
};
