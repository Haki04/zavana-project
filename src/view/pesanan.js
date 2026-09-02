import { pesanan_selesai } from "../controller/controller";

const showOrdersItem = async (element) => {
  const response = await fetch(`http://localhost:3000/orders`);
  const data = await response.json();
  console.log(data);
  data.map((item) => {
    element.innerHTML += `
 <div class="bg-white w-[150px] max-h-[250px] rounded flex flex-col gap-1 overflow-hidden shadow-sm">
          <div class="bg-white w-full flex justify-center items-center h-[100px]">
          <h1 class="font-bold text-5xl">${item.order_room}</h1>
          </div>
          <div class="bg-green-200/20 w-full h-[150px]">
            <ul class="flex flex-col items-center  p-1 h-full overflow-auto">
              
            ${item.order_items
              .map((d) => `<li class="text-1xl">${d.name} ${d.total}x</li>`)
              .join(``)}
              <li class="grid grid-cols-1 gap-1">
                <span class="bg-green-200 text-[14px] text-center p-0.5">${item.order_status}</span>
                <button data-action="selesai" class="bg-gray-300  cursor-pointer text-[14px] p-2 rounded">proses</button>
              </li>
            </ul>
          </div>
        </div>
`;
  });
};

showOrdersItem(document.getElementById("pesanan"));

document.getElementById("pesanan").addEventListener("click", (e) => {
  const action = e.target.dataset.action;
  pesanan_selesai(action);
});
