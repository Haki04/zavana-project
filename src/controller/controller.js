export const backPages = () => {
  document.querySelector("body").insertAdjacentHTML(
    "afterbegin",
    `<div class="fixed top-7 left-7 md:left-5 md:top-5 p-1" id="back-pages">
      <span class="cursor-pointer select-none" onclick="window.location.href='/pages/users/'"><img class="w-[20px]" src="/icon/home.png"></span>
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

export const animationSpin = (element, progres) => {
  if (!element) return;
  if (progres == "selesai") return;
  element.innerHTML += `
<div class="absolute w-full h-full flex justify-center items-center bg-white top-0 left-0">
<img class="w-[30px] animate-spin" src="/icon/loading.png"/>
</div>
`;
};

export const animationLoading = (element) => {
  document.querySelector(`#${element}`).insertAdjacentHTML(
    "afterbegin",
    `
    <div class="absolute bg-gray-200 z-20 w-full h-screen flex justify-center md:items-center" id="animate-spin">
      <span
        class="mt-[30%] md:mt-0 w-fit h-fit flex justify-center items-center flex-col bg-white rounded p-2"
        >
        loading...
      </span>
    </div>
    `,
  );

  setTimeout(() => {
    document.querySelector("body").querySelector("#animate-spin")?.remove();
  }, 1000);
};

let count = 0;
export const activeListHilight = (parent, el, bg_hilight = "bg-white") => {
  if (!parent) return;
  if (count == 0) {
    document.getElementById("dash-board").classList.add(bg_hilight);
    count++;
  } else {
    parent
      ?.querySelectorAll("li")
      .forEach((e) => e.classList.remove(bg_hilight));
  }
  el?.classList?.add(bg_hilight);
};
