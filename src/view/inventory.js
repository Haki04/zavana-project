const data_forms = {
  form: `  <div
          class="w-[300px] bg-amber-400 p-1 [&>*]:mb-2 rounded shadow-sm"
          id="form-inventory"
        >
        <input type="text" id="item-id" class="" value="1">
          <h1 class="text-3xl text-center font-bold mb-3" id='title'></h1>
          <input
            id="item-name"
            type="text"
            class="w-full p-2 bg-white"
            placeholder="Nama item"
          />
          <select name="" id="item-jenis" class="w-full bg-white p-2">
            <option value="" disabled selected>Jenis</option>
          </select>
          <select name="" id="item-report" class="w-full bg-white p-2">
            <option value="" disabled selected>Pilih laporan</option>
          </select>
          <input
            id="item-jumlah"
            type="number"
            class="p-2 bg-white w-full"
            placeholder="Jumlah"
          />
          <select name="" id="item-satuan" class="w-full bg-white p-2">
            <option value="" disabled selected>Satuan</option>
          </select>
          <textarea
            name=""
            id="item-extra-coment"
            placeholder="extra comment"
            class="w-full bg-white p-2 h-20 overflow-auto resize-none"
          ></textarea>
          <button class="w-[70%] bg-white p-2 cursor-pointer" onclick="sendForm()">Report</button>
        </div>`,
};

const data_section_form = {
  hk: {
    section_name: "hk",
    item_list_jenis: [
      "amenities",
      "room-items",
      "equipments-cleaning",
      "chemical",
    ],
    item_list_laporan: ["kerusakan", "inventory"],
    item_list_satuan: ["pcs", "jerigen", "satuan"],
  },
  kitchen: {
    section_name: "kitchen",
    item_list_jenis: ["makanan", "minuman", "bahan-dapur"],
    item_list_laporan: ["sold out", "habis", "inventory"],
    item_list_satuan: ["tray", "pack", "box"],
  },
};

const data_send_orders = [];

window.inventoryForm = (element, section) => {
  element.innerHTML = "";
  element.innerHTML = data_forms.form;
  const title = document
    .getElementById("form-inventory")
    .querySelector("#title");
  const item_id = document
    .getElementById("form-inventory")
    .querySelector("#item-id");

  switch (section) {
    case "hk":
      title.textContent = `Inventory ${section.toUpperCase()}`;
      break;
    case "ktn":
      title.textContent = `Inventory ${section.toUpperCase()}`;
      break;
    case "fo":
      title.textContent = `Inventory ${section.toUpperCase()}`;
      break;
    case "eng":
      title.textContent = `Inventory ${section.toUpperCase()}`;
      break;
  }
};

// inventory(document.getElementById("content"), "fo");
const inventoryReport = (section) => {
  inventoryForm(document.getElementById("content"), section);
  renderList(document.getElementById("form-inventory"), section);
};

// render component item/list
const renderList = (form, section) => {
  const jenis_item = data_section_form[section].item_list_jenis;
  const jenis_laporan = data_section_form[section].item_list_laporan;
  const jenis_satuan = data_section_form[section].item_list_satuan;

  jenis_item.forEach((item) => {
    form.querySelector("select#item-jenis").innerHTML +=
      `<option value="${item}">${item}</option>`;
  });
  jenis_laporan.forEach((item) => {
    form.querySelector("select#item-report").innerHTML +=
      `<option value="${item}">${item}</option>`;
  });
  jenis_satuan.forEach((item) => {
    form.querySelector("select#item-satuan").innerHTML +=
      `<option value="${item}">${item}</option>`;
  });
};

// sendForm

window.sendForm = async () => {
  const form = document.getElementById("form-inventory");
  if (form.querySelector("#item-name").value == "") {
    alert("name item gak boleh kosong");
    return;
  } else {
    if (form.querySelector("#item-jenis").value == "") {
      alert("jenis item gak boleh kosong");
    } else {
      if (form.querySelector("#item-report").value == "") {
        alert("laporan gak boleh kosong");
      } else {
        if (form.querySelector("#item-jumlah").value == "") {
          alert("jumlah item gak boleh kosong");
        } else {
          if (form.querySelector("#item-satuan").value == "") {
            alert("satuan item gak boleh kosong");
          } else {
            data_send_orders.push({
              name_item: form.querySelector("#item-name").value,
              jenis_item: form.querySelector("#item-jenis").value,
              report_item: form.querySelector("#item-report").value,
              total_item: form.querySelector("#item-jumlah").value,
              satuan_item: form.querySelector("#item-satuan").value,
              extra_coment: form.querySelector("#item-extra-coment").value,
            });
            const result_post = await fetch(`http://localhost:3000/inventory`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(data_send_orders),
            });
            if (result_post.message) {
              alert(result_post.message);
            } else {
              alert("gagal");
            }
            console.log(data_send_orders);
            form
              .querySelectorAll("input, select, textarea")
              .forEach((element) => {
                element.value = "";
              });
          }
        }
      }
    }
  }
};

// auto runing funtion
inventoryReport("hk");
