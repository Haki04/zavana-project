// const data_nama_makanan_minuman = {
//   indonesian: ["nasi goreng", "mie goreng", "gado-gado"],
//   zavana: ["omelet", "scrembel", "poch egg"],
//   vegetarian: ["sanwhich"],
//   drink: ["coffee", "tea", "orange juice"],
// };

const data_nama_makanan_minuman = {
  indonesian: [
    {
      name: "nasi goreng",
      ingredient: [
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nulla culpa quam id reiciendis fuga quos sunt esse distinctio et. Possimus quis quod accusamus est rerum dolor corrupti dignissimos doloribus!",
      ],
      category: "food",
    },
    {
      name: "mie goreng",
      ingredient: [
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nulla culpa quam id reiciendis fuga quos sunt esse distinctio et. Possimus quis quod accusamus est rerum dolor corrupti dignissimos doloribus!",
      ],
      category: "food",
    },
    {
      name: "gado gado",
      ingredient: [
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nulla culpa quam id reiciendis fuga quos sunt esse distinctio et. Possimus quis quod accusamus est rerum dolor corrupti dignissimos doloribus!",
      ],
      category: "food",
    },
  ],
  zavana: [
    {
      name: "omelete",
      ingredient: [
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nulla culpa quam id reiciendis fuga quos sunt esse distinctio et. Possimus quis quod accusamus est rerum dolor corrupti dignissimos doloribus!",
      ],
      category: "makanan",
    },
    {
      name: "puchegg",
      ingredient: [
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nulla culpa quam id reiciendis fuga quos sunt esse distinctio et. Possimus quis quod accusamus est rerum dolor corrupti dignissimos doloribus!",
      ],
      category: "makanan",
    },
    {
      name: "pancake",
      ingredient: [
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nulla culpa quam id reiciendis fuga quos sunt esse distinctio et. Possimus quis quod accusamus est rerum dolor corrupti dignissimos doloribus!",
      ],
      category: "makanan",
    },
  ],
  vegetarian: [
    {
      name: "sanwhich",
      ingredient: [
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nulla culpa quam id reiciendis fuga quos sunt esse distinctio et. Possimus quis quod accusamus est rerum dolor corrupti dignissimos doloribus!",
      ],
      category: "food",
    },
  ],
  drink: [
    {
      name: "coffee",
      ingredient: [
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nulla culpa quam id reiciendis fuga quos sunt esse distinctio et. Possimus quis quod accusamus est rerum dolor corrupti dignissimos doloribus!",
      ],
      category: "drink",
    },
    {
      name: "tea",
      ingredient: [
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nulla culpa quam id reiciendis fuga quos sunt esse distinctio et. Possimus quis quod accusamus est rerum dolor corrupti dignissimos doloribus!",
      ],
      category: "drink",
    },
    {
      name: "orange juice",
      ingredient: [
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nulla culpa quam id reiciendis fuga quos sunt esse distinctio et. Possimus quis quod accusamus est rerum dolor corrupti dignissimos doloribus!",
      ],
      category: "drink",
    },
  ],
};

const room_number = [
  101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115,
  116, 117, 118, 119, 120,
];
const description_makanana = {};
const data_kategory = ["makanan", "minuman"];
const myListChoose = [];

const kategory = document.getElementById("kategori");
const div = document.getElementById("content");
const choose = document.getElementById("my-choose");
const toggle = document.getElementById("toggle");
const list = document.getElementById("list-breakfast");
const total_item = document.getElementById("count-list");
const guest_name = document.getElementById("input-name");
const guest_room = document.getElementById("room-number");
const send_button = document.getElementById("send-button");

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
            class="md:ml-1 p-1 flex flex-row flex-wrap w-[50%] md:w-auto md:block justify-center gap-1 md:-mt-3"
          >
            <li class="text-[17px] md:text-[18px] md:mb-2 lg:mb-1 lg:text-2xl">
              ${i.name}
            </li>
            <li class="text-justify text-[12px] lg:text-[15px] h-[70px] overflow-scroll no-scrollbar">
             <b> ingredient </b>: ${i.ingredient}
            </li>
            <li class="w-[70%] md:mt-3">
              <button
                class="cursor-pointer text-[14px] p-0.5 bg-amber-100 hover:bg-amber-200 transition w-full rounded"
               onClick="addChoose(this)" data-list="${i.name}" id="btn-add">
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

const listRoomNumber = () => {
  guest_room.innerHTML += room_number
    .map((item) => `<option value="${item}">${item}</option>`)
    .join("");
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

const toggleShow = () => {
  if (!toggle.checked) {
    choose.classList.remove("hidden");
    toggle.checked = true;
  } else {
    choose.classList.add("hidden");
    toggle.checked = false;
  }
};

const removeChoose = (i) => {
  if (i || i == 0) {
    myListChoose.splice(i, 1);
    if (myListChoose.length == 0) {
      total_item.innerHTML = 0;
    } else {
      total_item.innerHTML = myListChoose.length;
    }
  }
  mapingDataList();
};

const mapingDataList = () => {
  list.innerHTML = myListChoose
    .map(
      (item, index) =>
        `<li class="relative" id="data-breakfast" data-breakfast="${item}">- ${item}<span onclick="removeChoose(${index})" class="absolute right-0 text-red-300">
      <span class="text-sm mr-2 text-yellow-400">
      food
      </span>
      
      X</span></li>`,
    )
    .join("");
};
const addChoose = (e) => {
  if (myListChoose.length < 4) {
    const my_list = e.getAttribute("data-list");
    myListChoose.push(my_list);
    total_item.innerHTML = myListChoose.length;
    mapingDataList();
  } else {
    alert("maksimum order items are 4 please text our reception for the extra");
  }
};

const cekMaksimumBreakfastTotal = () => {};

const sendWhatsApp = () => {
  if (
    guest_name.value !== "" &&
    guest_room.value !== "" &&
    myListChoose.length > 0
  ) {
    const list_breakfast = myListChoose
      .map((item, index) => {
        return `${index + 1}. ${item}`;
      })
      .join("\n");
    const massage_to_whatsapp = `
*My Order Breakfast*
=====================
Name : ${guest_name.value}
Room : ${guest_room.value}
Time : 08:00 
List : 
${list_breakfast}
    
=====================
    `;

    window.open(
      `https://wa.me/62087732703884?text=${encodeURIComponent(massage_to_whatsapp)}`,
    );
    // console.log(massage_to_whatsapp);
  } else {
    alert("data order breakfast tidak boleh kosong");
  }
};

showMenus();
listRoomNumber();
setInterval(() => {
  if (myListChoose.length == 0) {
    list.innerHTML = `<li class="h-full flex justify-center items-center !border-b-0">empty</li>
          `;
  }
}, 100);
