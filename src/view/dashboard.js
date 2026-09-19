import * as pesanan from "../view/pesanan.js";
import * as input_pesanan from "../view/input-pesanan.js";

const dataSection = {
  dashboard: `
        <div
            class="w-full bg-slate-300 flex flex-row gap-1 p-1"
            id="staff"
          ></div>
          <div class="bg-white h-[500px] w-full flex flex-col justify-start">
            <div class="w-full bg-slate-300 h-[70px]">
              <div class="w-full flex justify-between bg-white">
                <h1 class="text-2xl">Kerusakan</h1>
                <div class="w-[200px] bg-amber-100 flex items-center">
                  <select name="" id="">
                    <option value="">All</option>
                    <option value="">Fixed</option>
                    <option value="">Not yet</option>
                  </select>
                </div>
              </div>
              <div class="w-full bg-white">
                <ul class="flex flex-row justify-around items-center">
                  <li>posisi</li>
                  <li>repoter</li>
                  <li>status</li>
                  <li>date</li>
                  <li>action</li>
                </ul>
              </div>
            </div>
            <div class="w-full bg-slate-400 h-full p-1" id="kerusakan"></div>
          </div>
    `,
};

const getDataBrokeness = async (element) => {
  const { data, status } = await fetch(
    `${import.meta.env.VITE_URL_SERVER_DEV}/report`,
  ).then((res) => res.json());
  data.map((item) => {
    document.getElementById(element).innerHTML += `
   <div
                class="w-full bg-white h-[50px] rounded flex flex-row justify-between items-center gap-1 p-1 [&>*]:rounded [&>*]:text-center mt-1"
              >
                <span class="p-1 bg-blue-200 flex-1">${item.posisi}</span>
                <span class="p-1 bg-blue-200 flex-1">${item.reporter}</span>
                <span class="p-1 bg-blue-200 flex-1">${item.status}</span>
                <span class="p-1 bg-blue-200 flex-1">${item.date}</span>
                <span class="p-1 bg-blue-200 flex-1 cursor-pointer">hapus | edit</span>
              </div>
  
  `;
  });
};

const showStaffBoxs = (element) => {
  const data = ["staff", "inventory", "report"];
  data.map((item) => {
    document.getElementById(element).innerHTML += `
             <div
              class="w-[100px] h-[150px] bg-white rounded flex flex-col justify-start items-center p-1"
            >
              <div
                class="bg-gray-400 w-[80px] h-[80px] rounded-full overflow-hidden flex"
              ></div>
              <span>staff</span>
            </div>
    `;
  });
};

const section = (a) => {
  const div = document.getElementById("content-right");
  if (a == "dashboard") {
    div.innerHTML = dataSection.dashboard;
    showStaffBoxs("staff");
    getDataBrokeness("kerusakan");
  } else if (a == "inventory") {
  } else if (a == "staff") {
    document.getElementById("content-right").innerHTML = `
     <div
            class="w-full h-full bg-slate-300 flex flex-row justify-center gap-1 p-1"
            id="staff"
          ></div>
    `;
    showStaffBoxs("staff");
  } else if (a == "pesanan") {
    document.getElementById("content-right").innerHTML = `
        <input type="checkbox" name="" id="toggle" class="hidden" />
    <div id="content" ></div>
      <div class="h-[50%] w-full bg-white flex flex-wrap overflow-y-scroll gap-1 justify-center p-1" id="input-pesanan"></div>
    
      <div class="h-[50%] w-full bg-white flex flex-wrap justify-around overflow-y-scroll p-1 gap-2" id="pesanan"></div>
      `;

    input_pesanan.showItems(input_pesanan.data_item);
    pesanan.showOrdersItem(document.getElementById("pesanan"));
  } else if (a == "kerusakan") {
    document.getElementById("content-right").innerHTML = `
     <div class="bg-white h-full w-full flex flex-col justify-start">
            <div class="w-full bg-slate-300 h-[70px]">
              <div class="w-full flex justify-between bg-white">
                <h1 class="text-2xl">Kerusakan</h1>
                <div class="w-[200px] bg-amber-100 flex items-center">
                  <select name="" id="">
                    <option value="">All</option>
                    <option value="">Fixed</option>
                    <option value="">Not yet</option>
                  </select>
                </div>
              </div>
              <div class="w-full bg-white">
                <ul class="flex flex-row justify-around items-center">
                  <li>posisi</li>
                  <li>repoter</li>
                  <li>status</li>
                  <li>date</li>
                  <li>action</li>
                </ul>
              </div>
            </div>
            <div class="w-full bg-slate-400 h-full p-1" id="kerusakan"></div>
          </div>
    `;
    getDataBrokeness("kerusakan");
  }
};

window.section = section;
// section("dashboard");

// dahsboard()
// inventory()
// staff()
// pesanan()
// kerusakan()
