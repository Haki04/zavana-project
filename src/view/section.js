import { animationLoading, getCookie } from "../controller/controller";

if (!getCookie()) {
  window.location.href = "/pages/login";
}

const greating = (name) => {
  document.getElementById("greating").innerHTML =
    `<span>Welcome <span class="font-bold">${name.toUpperCase()}</span></span>`;
};

const showUserSection = (element) => {
  animationLoading("content-user");
  const section_list = [
    ["profile", "user_2.png"],
    ["report", "report.png"],
    ["inventory", "track.png"],
    ["pesanan", "order.png"],
    ["input-pesanan", "purchase_order.png"],
  ];
  section_list.map((item) => {
    element.innerHTML += `
     <div
          class="w-[200px] md:w-[250px] md:h-[150px] shrink-0 h-[80px] bg-gray-200/50 rounded flex justify-center items-center cursor-pointer hover:scale-110 hover:my-2 transition gap-2 md:gap-4"
          onclick="clickPages(this)"
        >
          <img src="/icon/${item[1]}" alt="" class="w-[60px] md:w-[80px]" />
          <h1 class="text-[20px] select-none">${item[0]}</h1>
        </div>
`;
  });
};

window.clickPages = (args) => {
  const arg = args.querySelector("h1").textContent;
  if (arg == "profile") {
    return (window.location.href = "/pages/users/profile");
  } else if (arg == "pesanan") {
    return (window.location.href = "/pages/users/pesanan");
  } else if (arg == "report") {
    return (window.location.href = "/pages/report/");
  } else if (arg == "input-pesanan") {
    return (window.location.href = "/pages/users/input-pesanan");
  } else {
    return (window.location.href = "/pages/inventory/");
  }
};

greating(getCookie().name);
showUserSection(document.getElementById("content-user"));
