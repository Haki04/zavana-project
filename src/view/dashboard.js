import { tombol_barang } from "../controller/controller";
import { printNav } from "./components/nav";
import { showTable } from "./components/table";

// load nav view

printNav(document.getElementById("navigation"));

// print contanet barang
showTable(document.getElementById("table-barang"));

// for (let i = 0; i < 7; i++) {
//   content_barang.innerHTML += `
//  <div class="bg-white h-[150px] w-[300px] rounded flex flex-row gap-1 overflow-hidden shadow-sm">
//           <div class="bg-white w-[40%] flex justify-center items-center">
//           <img src="https://assets.pikiran-rakyat.com/crop/0x0:0x0/720x0/webp/photo/2025/09/26/1043297320.jpg">
//           </div>
//           <div class="bg-green-200/20 w-[60%]">
//             <ul class="flex flex-col items-center justify-around p-1 h-full">
//               <li class="text-2xl">Gulai</li>
//               <li>10 items</li>
//               <li class="grid grid-cols-3 gap-1">
//                 <button data-action="tambah" class="bg-orange-200 cursor-pointer text-[14px]">Tambah</button>
//                 <button data-action="kurangi" class="bg-yellow-200  cursor-pointer text-[14px]">Kurangi</button>
//                 <button data-action="terjual"  class="bg-blue-200 cursor-pointer text-[14px]">Terjual</button>
//               </li>
//             </ul>
//           </div>
//         </div>
// `;
// }

// content_barang.addEventListener("click", (e) => {
//   const action = e.target.dataset.action;
//   tombol_barang(action);
// });
