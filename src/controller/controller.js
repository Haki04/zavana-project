export const backPages = () => {
  document.querySelector("body").insertAdjacentHTML(
    "afterbegin",
    `<div class="fixed top-0 left-2 p-1" id="back-pages">
      <span class="text-2xl cursor-pointer select-none" onclick="window.location.href='/pages/users/'">home</span>
    </div>`,
  );
};

export const makeCookie = (data) => {
  const cookie =
    (document.cookie = `name=${encodeURIComponent(JSON.stringify(data))}; max-age=28800; path=/`);
  return cookie;
};

export const getCookie = () => {
  const cookie = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith("name="));
  // console.log(cookie);
  // return;
  if (cookie) {
    return JSON.parse(
      decodeURIComponent(
        cookie
          .split("; ")
          .find((cookie) => cookie.startsWith("name="))
          ?.split("=")[1],
      ),
    );
  }
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

export const animationSpin = () => {
  document.querySelector("body").insertAdjacentHTML(
    "afterbegin",
    `
    <div class="fixed bg-gray-200 z-20 w-full h-screen flex justify-center md:items-center" id="animate-spin">
      <span
        class="mt-[30%] md:mt-0 w-fit h-fit flex justify-center items-center flex-col bg-white rounded p-2"
        >
        loading...
      </span>
    </div>
    `,
  );
};
