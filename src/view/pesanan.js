export const showOrdersItem = async (element, update) => {
  try {
    if (!element) {
      return;
    }
    const response = await fetch(
      `${import.meta.env.VITE_URL_SERVER_DEV}/users/orders`,
    );
    const data = await response.json();
    update ? (element.innerHTML = "") : "";
    data.data.map((item) => {
      let sign_orders = "bg-gray-300";
      let sign_progres;

      switch (item.order_status) {
        case "order":
          sign_progres = "proses";
          break;
        case "in proses":
          sign_orders = "bg-yellow-300/50";
          sign_progres = "selesai ?";
          break;
        default:
          sign_orders = "bg-green-300/50";
          sign_progres = "selesai";
      }
      element.innerHTML += `
 <div class="bg-white w-[150px] max-h-[300px] h-[200px] rounded flex flex-col gap-1 overflow-hidden shadow-sm">
          <div class="${sign_orders} w-full flex justify-center items-center h-[40%]">
          <h1 class="font-bold text-5xl">${item.order_room}</h1>
          </div>
          <div class="bg-green-200/20 w-full h-[60%]">
            <ul class="flex flex-col items-center  p-1 h-full overflow-y-scroll">
            <span class="sticky top-0 bg-white text-center w-[50%] font-bold">${item.place_to_eat}</span>
              
            ${item.order_items
              .map(
                (d) => `<li class="text-1xl w-full">${d.name} ${d.total}x</li>`,
              )
              .join(``)}
              <li class="grid grid-cols-1 gap-1 mt-1 justify-items-center place-items-end h-full w-full">
               ${item.order_status == `order` || item.order_status == `in proses` ? ` <span class="bg-yellow-200 text-[14px] text-center p-0.5 rounded">${item.order_status}</span>` : ``}
                <button data-action="${item.order_status}" class="${sign_orders} cursor-pointer text-[14px] p-2 py-3 rounded" onclick="sendUpdate(${item.uu_id}, this)">${sign_progres} ${sign_progres == `selesai` ? `😁` : ``}</button>
              </li>
            </ul>
          </div>
        </div>
`;
    });
  } catch (error) {
    console.log(error);
  }
};

export const sendUpdate = async (id, el) => {
  let status_new = "";

  switch (el.getAttribute("data-action")) {
    case "order":
      status_new = "in proses";
      break;
    default:
      status_new = "selesai";
      break;
  }

  const results = await fetch(
    `${import.meta.env.VITE_URL_SERVER_DEV}/users/orders/update`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uu_id: id,
        status: status_new,
      }),
    },
  ).then((res) => res.json());

  if (results.status == 201) {
    let update = true;
    showOrdersItem(document.getElementById("pesanan"), update);
  } else {
    alert(results.message);
  }
};

window.sendUpdate = sendUpdate;

showOrdersItem(document.getElementById("pesanan"));
