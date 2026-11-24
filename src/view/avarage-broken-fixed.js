const avarageBrokenFixed = (parent) => {
  document.getElementById(parent).insertAdjacentHTML(
    "beforeend",
    `
    <div class="w-full grid grid-cols-4 grid-cols-2 gap-2 *:p-1  relative">
        <div class=" border-2 col-span-3 h-[50px]">
            <div class="bg-red-100 w-full h-full"></div>
        </div>
        <div class="bg-yellow-100 h-[50px]">p</div>
        <div class="col-span-4 gap-2 *:rounded flex *:flex-1 *:h-[150px]">
            <div class="bg-green-200"></div>
            <div class="bg-yellow-200"></div>
            <div class="bg-fuchsia-100"></div>
            <div class="bg-orange-200"></div>
        </div>
    </div>
    `,
  );
};

export default avarageBrokenFixed;
