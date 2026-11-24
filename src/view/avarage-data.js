const avarageData = (parent) => {
  document.getElementById(parent).insertAdjacentHTML(
    "afterbegin",
    `
    <div class='row-span-3 col-span-3 bg-gray-50 relative' id="stocks-iventory">
      <span class="absolute top-0 left-2 text-[12px] opacity-30">using stock per month</span>
    </div>
    <div class='row-span-1 bg-yellow-100' id="">
        <select>
          <option>section</option>
        </select>
    </div>
    <div class='row-span-2 bg-red-100' id="kerusakan-fixed"></div>`,
  );
  showStocksInventory("stocks-iventory");
};

const showStocksInventory = async (parent, section) => {
  document.getElementById(parent).insertAdjacentHTML(
    "afterbegin",
    `
    <div class="w-full h-[300px] border-l-2 border-gray-400 border-b-2 p-2  flex gap-2 items-end">
      ${[4, 8, 5, 9]
        .map(
          (item) =>
            `
            <div class="bg-red-200 shadow  w-[50px] h-[${item}0%] relative">${item}0%
            <span class=" inline-block  absolute [writing-mode:vertical-rl] bottom-0 right-0">item</span>
            </div>
         `,
        )
        .join("")}
    </div>
    `,
  );
};
// const responses = await fetch(`${import.meta.env.VITE_URL_SERVER_DEV}/stocks`).then(res => res.json())
//   return responses.data

export default avarageData;
