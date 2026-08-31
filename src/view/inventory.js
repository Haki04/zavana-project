window.inventory = (element, arg) => {
  element.innerHTML = "";
  if (arg.toLowerCase() == "hk") {
    element.innerHTML += `<div class="w-[300px] bg-amber-400 p-1 [&>*]:mb-2 rounded shadow-sm">
          <h1 class="text-3xl text-center font-bold mb-3">Inventory HK</h1>
          <input
            type="text"
            class="w-full p-2 bg-white"
            placeholder="Nama item"
          />
          <select name="" id="" class="w-full bg-white p-2">
            <option value="" disabled selected>Jenis</option>
          </select>
          <select name="" id="" class="w-full bg-white p-2">
            <option value="" disabled selected>Pilih laporan</option>
          </select>
          <input
            type="number"
            class="p-2 bg-white w-full"
            placeholder="Jumlah"
          />
          <select name="" id="" class="w-full bg-white p-2">
            <option value="" disabled selected>Satuan</option>
          </select>
          <textarea
            name=""
            id=""
            placeholder="extra comment"
            class="w-full bg-white p-2 h-20 overflow-auto resize-none"
          ></textarea>
          <button class="w-[70%] bg-white p-2">Report</button>
        </div>`;
  } else if (arg.toLowerCase() == "kitchen") {
    element.innerHTML += `<div class="w-[300px] bg-amber-400 p-1 [&>*]:mb-2 rounded shadow-sm">
          <h1 class="text-3xl text-center font-bold mb-3">Inventory Kitchen</h1>
          <input
            type="text"
            class="w-full p-2 bg-white"
            placeholder="Nama item"
          />
          <select name="" id="" class="w-full bg-white p-2">
            <option value="" disabled selected>Jenis</option>
          </select>
          <select name="" id="" class="w-full bg-white p-2">
            <option value="" disabled selected>Pilih laporan</option>
          </select>
          <input
            type="number"
            class="p-2 bg-white w-full"
            placeholder="Jumlah"
          />
          <select name="" id="" class="w-full bg-white p-2">
            <option value="" disabled selected>Satuan</option>
          </select>
          <textarea
            name=""
            id=""
            placeholder="extra comment"
            class="w-full bg-white p-2 h-20 overflow-auto resize-none"
          ></textarea>
          <button class="w-[70%] bg-white p-2">Report</button>
        </div>`;
  } else if (arg.toLowerCase() == "fo") {
    element.innerHTML += `<div class="w-[300px] bg-amber-400 p-1 [&>*]:mb-2 rounded shadow-sm">
          <h1 class="text-3xl text-center font-bold mb-3">Inventory FO</h1>
          <input
            type="text"
            class="w-full p-2 bg-white"
            placeholder="Nama item"
          />
          <select name="" id="" class="w-full bg-white p-2">
            <option value="" disabled selected>Jenis</option>
          </select>
          <select name="" id="" class="w-full bg-white p-2">
            <option value="" disabled selected>Pilih laporan</option>
          </select>
          <input
            type="number"
            class="p-2 bg-white w-full"
            placeholder="Jumlah"
          />
          <select name="" id="" class="w-full bg-white p-2">
            <option value="" disabled selected>Satuan</option>
          </select>
          <textarea
            name=""
            id=""
            placeholder="extra comment"
            class="w-full bg-white p-2 h-20 overflow-auto resize-none"
          ></textarea>
          <button class="w-[70%] bg-white p-2">Report</button>
        </div>`;
  } else if (arg.toLowerCase() == "enginer") {
    element.innerHTML += `<div class="w-[300px] bg-amber-400 p-1 [&>*]:mb-2 rounded shadow-sm">
          <h1 class="text-3xl text-center font-bold mb-3">Inventory Enginer</h1>
          <input
            type="text"
            class="w-full p-2 bg-white"
            placeholder="Nama item"
          />
          <select name="" id="" class="w-full bg-white p-2">
            <option value="" disabled selected>Jenis</option>
          </select>
          <select name="" id="" class="w-full bg-white p-2">
            <option value="" disabled selected>Pilih laporan</option>
          </select>
          <input
            type="number"
            class="p-2 bg-white w-full"
            placeholder="Jumlah"
          />
          <select name="" id="" class="w-full bg-white p-2">
            <option value="" disabled selected>Satuan</option>
          </select>
          <textarea
            name=""
            id=""
            placeholder="extra comment"
            class="w-full bg-white p-2 h-20 overflow-auto resize-none"
          ></textarea>
          <button class="w-[70%] bg-white p-2">Report</button>
        </div>`;
  }
};
