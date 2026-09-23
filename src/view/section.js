import { animationSpin, getCookie } from "../controller/controller";

if (!getCookie()) {
  window.location.href = "/pages/login";
}

const showUserSection = (element) => {
  animationSpin();
  setTimeout(() => {
    document.querySelector("body").querySelector("#animate-spin").remove();
  }, 1000);
  const section_list = [
    "profile",
    "pesanan",
    "report",
    "input-pesanan",
    "inventory",
    "report",
  ];
  section_list.map((item) => {
    element.innerHTML += `
     <div
          class="w-[250px] shrink-0 h-[150px] bg-slate-400 rounded flex justify-center items-center cursor-pointer hover:scale-110 hover:my-2 transition" onclick="clickPages(this)"
        >
          <h1 class="text-3xl">${item}</h1>
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
showUserSection(document.getElementById("content-user"));
