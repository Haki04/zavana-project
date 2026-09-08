const snack_room = document.getElementById("snacks");
const data_orders = [];

window.togglePopUp = (data) => {
  const pop_up = document.getElementById("pop-up");
  const room = document.getElementById("room");
  if (data) {
    pop_up.classList.remove("hidden");
    room.value = data;
  } else {
    pop_up.classList.add("hidden");
  }
};

const tampilkanSnack = (section) => {
  fetch(`${import.meta.env.VITE_URL_SERVER_DEV}/orders`)
    .then((response) => response.json())
    .then((data) => {
      data_orders.push(...data);
      data_orders.map((item) => console.log(item.order_items));
      return;

      data_orders.forEach((data) => {
        console.log(data);
      });
    })
    .catch((error) => {
      console.error(error);
    });
};

window.sendSnackEat = (snacks, room) => {
  if (snacks.value == "") {
    alert("tolong pilih snack apa saja yang dimakan");
  } else {
    document.getElementById("pop-up").classList.add("hidden");
    console.log(`
berhasil
==================
snack : ${snacks.value} dimakan
room  : ${room.value}
      `);
  }
};

tampilkanSnack("fo");

// snack_room.innerHTML += `
//  <div class="bg-white w-[150px] min-h-[200px] rounded flex flex-col gap-1 overflow-hidden shadow-sm">
//           <div class="bg-white w-full flex justify-center items-center h-[60%]">
//           <h1 class="font-bold text-5xl">${data.order_room}</h1>
//           </div>
//           <div class="bg-green-200/20 h-[40%] ">
//             <ul class="flex flex-col items-center justify-around p-1 w-full">

//             <li class="text-1xl uppercase">${JSON.parse(data.order_items).name}</li>
//             <li class="grid grid-cols-1 my-2">

//                ${
//                  section == `hk`
//                    ? ` <button data-action="dibayar" class="bg-gray-300  cursor-pointer text-[14px] p-2 rounded" onclick="togglePopUp(${data.order_room})">dimakan</button>`
//                    : `
//                 <button class="bg-green-300  cursor-pointer text-[14px] p-2 rounded w-full">${data.order_status}</button>`
//                }

//               </li>
//             </ul>
//           </div>
//         </div>
// `;
