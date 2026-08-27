const snack_room = document.getElementById("snacks");
const data_snack = [];
function tampilkanSnack() {
  fetch("http://localhost:3000/snacks")
    .then((response) => response.json())
    .then((data) => {
      data_snack.push(...data);
      data_snack.forEach((data) => {
        snack_room.innerHTML += `
 <div class="bg-white w-[150px] min-h-[200px] rounded flex flex-col gap-1 overflow-hidden shadow-sm">
          <div class="bg-white w-full flex justify-center items-center h-[100px]">
          <h1 class="font-bold text-5xl">${data.room}</h1>
          </div>
          <div class="bg-green-200/20 w-full ">
            <ul class="flex flex-col items-center justify-around p-1 h-full">

            <li class="text-1xl uppercase">${data.snacks.replace(`,`, ` | `)}</li>
      
              <li class="grid grid-cols-2 gap-2 my-2">
                <button class="bg-green-300  cursor-pointer text-[14px] p-2 rounded">${data.status_snack}</button>
                <button data-action="dibayar" class="bg-gray-300  cursor-pointer text-[14px] p-2 rounded">dibayar</button>
              </li>
            </ul>
          </div>
        </div>
`;
      });
    })
    .catch((error) => {
      console.error(error);
    });
}

tampilkanSnack();

snack_room.addEventListener("click", (e) => {
  const action = e.target.dataset.action;
  snack_dibeli(action);
});
