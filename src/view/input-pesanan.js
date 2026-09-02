const element = document.getElementById("input-pesanan");

window.data_item = [
  {
    name: "nasi goreng",
    category: "lokal",
    img: "input.png",
  },
  {
    name: "gado gado",
    category: "lokal",
    img: "logout.png",
  },
  {
    name: "spageti",
    category: "eropa",
    img: "order.png",
  },
];

const data_list_order = [];
const data_send = [];

window.countOrderItem = (sign, e) => {
  const el = e.target.closest("#input_count");
  const element = el.querySelector("input");

  if (sign === "+") {
    element.value++;
  } else if (sign === "-" && element.value > 0) {
    element.value--;
  }
};

window.removeItem = (items, index) => {
  data_list_order.splice(index, 1);

  showItemOrder(items, data_list_order);
};

window.addListItem = (items, e, evnt) => {
  const total = e.querySelector("input");
  const name_item = evnt.target;
  if (Number(total.value) > 0) {
    if (
      evnt.target.tagName === "BUTTON" &&
      name_item.getAttribute("data-name")
    ) {
      data_list_order.push({
        name: name_item.getAttribute("data-name"),
        total: total.value,
      });
    }
  } else {
    alert("pastikan mengisi total item yang di tambahkan ");
  }
  showItemOrder(items, data_list_order);
};

window.btnToggle = (e) => {
  const div_lis_order = document.getElementById("item-order-list");
  const toggle = document.getElementById("toggle");

  if (!toggle.checked) {
    div_lis_order.classList.remove("hidden");
    e.classList.add("-rotate-90");
    toggle.checked = true;
  } else {
    toggle.checked = false;
    div_lis_order.classList.add("hidden");
    e.classList.remove("-rotate-90");
  }
};

window.filterItems = (arg) => {
  setTimeout(
    showItems(
      data_item.filter((item) =>
        ["name", "category"].some((key) =>
          item[key]?.toLowerCase().startsWith(arg.toLowerCase()),
        ),
      ),
    ),
    500,
  );
  console.log(
    data_item.filter((item) => item.name.toLocaleLowerCase().startsWith(arg)),
  );
};

window.showItems = (data) => {
  element.innerHTML = "";
  data.forEach((d, i) => {
    element.innerHTML += `
         <div
          class="w-[200px] h-[120px] bg-gray-400 rounded flex justify-around items-center overflow-hidden" 
        >
          <div class="w-[40%] flex justify-center items-center">
            <img class="w-[50px]" src="/icon/${d.img}" alt="" />
          </div>
          <div
            class="w-[60%] bg-white h-full flex flex-col justify-center items-center gap-1" id="input_count"  onclick="addListItem(document.getElementById('list-item-li'), this, event)"
          >
            <h1 class="text-1xl">${d.name}</h1>
            <div
              class="flex flex-row px-1 rounded border-2 items-center" 
            >
              <input value="0" class="w-5 h-4" id="input"/>

              <div class="flex flex-col [&>button]:text-[9px]">
                <button onclick="countOrderItem('+', event)">▲</button>
                <button onclick="countOrderItem('-', event)">▼</button>
              </div>
            </div>
            <button data-name="${d.name}" class="w-[50%] bg-green-400 rounded cursor-pointer"  id="btn-add">
              tambah
            </button>
          </div>
        </div>
        `;
  });
};

window.sendOrder = async () => {
  const room_number = document.getElementById("room-number").value;
  if (data_list_order.length == 0) {
    alert("list orderan tidak boleh kosong");
  } else {
    if (room_number == "") {
      alert("room number tidak boleh kosong");
    } else {
      const date = new Date();
      const uu_id = `KTN-${String(date.getHours()).padStart(2, `0`)}${String(date.getMinutes()).padStart(2, `0`)}${String(date.getSeconds()).padStart(2, `0`)}`;
      data_send.push({
        room: document.getElementById("room-number").value,
        status: "order",
        uu_id: uu_id,
        items: [...data_list_order],
      });
      const results = await fetch(`http://localhost:3000/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data_send),
      });
      if (results.status) {
        console.log(results);
        alert("berhasil menambahkan");
      } else {
        alert("gagal");
      }
    }
  }
};

function showItemOrder(items, data) {
  let el = "";

  data.forEach((d, i) => {
    el += `
         <li class="flex justify-between">
                       ${d.name} - ${d.total}x
                        <span
                          onclick="removeItem(document.getElementById('list-item-li'))"
                          class="mr-[10px] cursor-pointer text-red-500"
                          onclick="removeItem(document.getElementById('list-item-li'),${i})">X</span
                        >
                      </li>
        `;
  });
  items.innerHTML = el;
}

function loopingSelect(rooms) {
  for (let i = 101; i <= 120; i++) {
    rooms.innerHTML += `<option value="${i}">${i}</option>`;
  }
}

loopingSelect(document.getElementById("room-number"));
showItems(data_item);
