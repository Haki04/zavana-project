const content_hk = document.getElementById("content");

const showBoxInfo = () => {
  for (let i = 0; i < 7; i++) {
    content_hk.innerHTML += `
         <div
          class="w-[180px] h-[220px] bg-amber-300 rounded overflow-hidden"
        >
          <div class="w-full bg-white h-[50%] flex justify-center items-center">
            <h1 class="text-2xl font-bold">Amenities</h1>
          </div>
          <div
            class="w-full bg-gray-400 h-[50%] grid grid-rows-3 justify-items-start pl-1 [&>*]:p-1 [&>*]:rounded [&>*]:bg-yellow-200 [&>*]:h-[30px] gap-1 [&>*]:flex [&>*]:items-center[&>*]:justify-center [&>*]:w-[50%] place-items-center"
          >
            <span>Coffee </span>
            <span>Tea</span>
            <span>Sugar</span>
          </div>
        </div>`;
  }
};

// showBoxInfo();
