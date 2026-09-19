import { plusMinus, toggleFormEdit } from "../controller/controller";

window.toggleFormEdit = toggleFormEdit;
window.plusMinus = plusMinus;
const content_stocks = document.getElementById("content");

const data = [
  "amenities",
  "chemical",
  "eqipments",
  "sheet",
  "pillow",
  "pillow-case",
];

const showFormEdit = (d) => {
  return `
   <div
      class="w-full h-screen fixed z-10 bg-w flex bg-white/50 justify-center items-center hidden"
      id="form-edit-stocks"
    >
      <div
        class="w-[200px] h-auto bg-gray-100 rounded p-2 flex flex-col justify-start gap-1 items-center [&_input]:focus:outline-0"
        id="form-edit-stocks"
      >
        <h1 class="text-3xl text-center bg-gray-300 w-full">edit</h1>
        <input
          type="text"
          value="${d.name}"
          class="bg-white w-full pl-1 h-[35px]"
          disabled
        />
        <div
          class="flex flex-row justify-around items-center bg-white has-[:focus]:border h-[35px]"
        >
          <input
            type="text"
            value="${d.total}"
            class="bg-white w-full pl-1"
            id="input-total"
          />
          <span
            class="w-[30%] flex justify-between [&>*]:cursor-pointer [&>*]:font-bold [&>*]:text-[20px] [&>*]:select-none"
          >
            <span
              class="p-1"
              onclick="
                plusMinus(
                  Number(1),
                  document.getElementById('input-total').value,
                )
              "
              >+</span
            >
            <span
              class="p-1"
              onclick="
                plusMinus(
                  Number(0),
                  document.getElementById('input-total').value,
                )
              "
              >-</span
            >
          </span>
        </div>
        <div class="flex justify-around gap-2 p-1">
          <button
            class="bg-green-200 w-[50%] p-2 rounded cursor-pointer hover:shadow"
            onclick="sendUpdate(${d.id})"
          >
            simpan
          </button>
          <button
            class="bg-orange-200 w-[50%] p-2 rounded cursor-pointer hover:shadow"
            onclick="toggleFormEdit()"
          >
            batal
          </button>
        </div>
      </div>
    </div>
  `;
};

const showBoxStocks = (data) => {
  data.map((item) => {
    content_stocks.innerHTML += `
    ${showFormEdit({ id: item.id, name: item.name, total: item.total })}
       <div
          class="w-[150px] h-[100px] bg-gray-100 border rounded overflow-hidden relative shadow pt-1"
        >
          <span
            class="absolute top-0 right-2 cursor-pointer"
            onclick="toggleFormEdit()"
            >edit</span
          >
          <div class="w-full bg-white h-[70%] flex justify-end items-center flex-col">
            <h1 class="text-2xl font-bold">${item.name}</h1>
           <span class="text-[14px] ">${item.type}</span>
          </div>
          <div class="w-full flex justify-center items-center">
            <span class=""
              >total : <span class="font-bold">${item.total} ${item.satuan}</span></span
            >
          </div>
        </div>
       `;
  });
};

const getDataStocks = async () => {
  const { data } = await fetch(
    `${import.meta.env.VITE_URL_SERVER_DEV}/stocks?section=hk`,
  ).then((res) => res.json());
  console.log(data);

  return data;
};

const sendUpdate = () => {};

showBoxStocks(await getDataStocks());
