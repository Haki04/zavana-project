// cek session login
// document.cookie = "name=kiki";

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

// stocks.js

export const toggleFormEdit = () => {
  const form = document.getElementById("form-edit-stocks");
  const toggle = document.getElementById("toggle");
  if (!toggle.checked) {
    form.classList.replace("hidden", "fixed");
    toggle.checked = true;
  } else {
    form.classList.replace("fixed", "hidden");
    toggle.checked = false;
  }
};
export const plusMinus = (arg, total_old) => {
  const form = document.getElementById("form-edit-stocks");
  let total = Number(total_old);
  if (total < 0) {
    return;
  }
  if (arg == 1) {
    total++;
    form.querySelectorAll("input")[1].value = total;
  } else {
    if (total < 1) {
      return;
    }
    total--;
    form.querySelectorAll("input")[1].value = total;
  }
};
