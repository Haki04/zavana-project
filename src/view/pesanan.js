import { pesanan_selesai } from "../controller/controller";

const pesanan = document.getElementById("pesanan");
for (let i = 0; i < 7; i++) {
  pesanan.innerHTML += `
 <div class="bg-white w-[150px] min-h-[200px] rounded flex flex-col gap-1 overflow-hidden shadow-sm">
          <div class="bg-white w-full flex justify-center items-center h-[100px]">
          <h1 class="font-bold text-5xl">101</h1>
          </div>
          <div class="bg-green-200/20 w-full ">
            <ul class="flex flex-col items-center justify-around p-1 h-full">
              <li class="text-1xl">Gulai</li>
              <li class="text-1xl">Nasi Goreng</li>
              <li class="grid grid-cols-1 gap-1">
                <span class="bg-green-200 text-[14px] text-center p-0.5">proses</span>
                <button data-action="selesai" class="bg-gray-300  cursor-pointer text-[14px] p-2 rounded">selesai</button>
              </li>
            </ul>
          </div>
        </div>
`;
}

pesanan.addEventListener("click", (e) => {
  const action = e.target.dataset.action;
  pesanan_selesai(action);
});
