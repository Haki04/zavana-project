const element = document.getElementById("input-pesanan");

const data_list_order = [];

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
  data_list_order.slice(index, 1);
  console.log(data_list_order);

  showItemOrder(items, data_list_order);
};

window.addListItem = (items, e, evnt) => {
  const total = e.querySelector("input");
  const name_item = evnt.target;
  if (Number(total.value) > 0 && evnt.target.tagName !== "BUTTON") {
    data_list_order.push({
      name: name_item.getAttribute("data-name"),
      total: total.value,
    });
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

function showItemOrder(items, data) {
  let el = "";
  data.forEach((d, i) => {
    el += `
         <li class="flex justify-between">
                       ${d.name} - ${d.total}x
                        <span
                          onclick="removeItem(this)"
                          class="mr-[10px] cursor-pointer text-red-500"
                          onclick="removeItem(document.getElementById('list-item-li'),${i})">X</span
                        >
                      </li>
        `;
  });
  items.innerHTML = el;
}

function showItems() {
  for (let i = 0; i < 10; i++) {
    element.innerHTML += `
         <div
          class="w-[200px] h-[120px] bg-gray-400 rounded flex justify-around items-center overflow-hidden" 
        >
          <div class="w-[40%] flex justify-center items-center">
            <img class="w-[50px]" src="/icon/input.png" alt="" />
          </div>
          <div
            class="w-[60%] bg-white h-full flex flex-col justify-center items-center gap-1" id="input_count"  onclick="addListItem(document.getElementById('list-item-li'), this, event)"
          >
            <h1 class="text-1xl">Nasi goreng</h1>
            <div
              class="flex flex-row px-1 rounded border-2 items-center" 
            >
              <input value="0" class="w-5 h-4" id="input"/>

              <div class="flex flex-col [&>button]:text-[9px]">
                <button onclick="countOrderItem('+', event)">▲</button>
                <button onclick="countOrderItem('-', event)">▼</button>
              </div>
            </div>
            <button data-name="Nasi goreng" class="w-[50%] bg-green-400 rounded cursor-pointer"  id="btn-add">
              tambah
            </button>
          </div>
        </div>
        `;
  }
}

function sendOrder(items) {}
showItems();
