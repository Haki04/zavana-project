const data_nama_makanan_minuman = {
  indonesian: ["nasi goreng", "mie goreng", "gado-gado"],
  zavana: ["omelet", "scrembel", "poch egg"],
  vegetarian: ["sanwhich"],
  drink: ["coffee", "tea", "orange juice"],
};

const description_makanana = {};
const data_nama_minuman = ["coffee", "tea", "orenge juice"];
const data_kategory = ["makanan", "minuman"];

const kategory = document.getElementById("kategori");
const div = document.getElementById("content");

const cardMenus = (i) => {
  div.innerHTML += `<div
          class="card flex flex-col md:flex-row flex-wrap"
          data="makanan"
          id="kategori"
        >
          <img
            src="https://img-13.stickers.cloud/packs/c0a47452-d9c5-401c-9336-77072c8f2a94/webp/4826b1d0-fda8-4217-88d5-afc324f784bc.webp"
            alt=""
            class="w-[50%] h-full md:w-full md:h-[50%]"
          />
          <ul
            class="md:ml-1 p-1 flex flex-row flex-wrap w-[50%] md:w-auto md:block justify-center gap-1"
          >
            <li class="text-[12px] md:text-[14px] lg:text-[18px] lg:mt-[2%]">
              ${i}
            </li>
            <li class="text-justify text-[7px] md:text-[9px] lg:text-[12px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              deleniti non ut,
            </li>
            <li class="w-[50%]">
              <button
                class="cursor-pointer text-[6px] md:text-[10px] lg:text-[14px] p-1 my-[7%] bg-amber-100 hover:bg-amber-200 transition w-full rounded"
               onClick="(alert('sabar masih proses, btw keren gak 😁😎😉 #KIKI GANTENG anjay'))">
                Choose Now
              </button>
            </li>
          </ul>
        </div>`;
};

const showMenus = (data = "") => {
  if (data !== "" && data !== "all") {
    for (const [jenis, nama] of Object.entries(data_nama_makanan_minuman)) {
      if (jenis == data) {
        div.innerHTML = "";
        for (const d of nama) {
          cardMenus(d);
        }
      }
    }
  } else {
    div.innerHTML = "";
    for (const datas of Object.values(data_nama_makanan_minuman)) {
      for (const d of datas) {
        cardMenus(d);
      }
    }
  }
};

const menuFilter = (el) => {
  const e = el.getAttribute("data-filter");
  if (e == "indonesian") {
    showMenus(e);
  } else if (e == "zavana") {
    showMenus(e);
  } else if (e == "vegetarian") {
    showMenus(e);
  } else if (e == "drink") {
    showMenus(e);
  } else {
    showMenus(e);
  }
};

showMenus();
