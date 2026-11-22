import { getCookie } from "../controller/controller.js";

const about =
  "project ini dibuat untuk memudahkan para staff zavana room untuk melakukan inventory maupun hal sejenisnya";
const developer = [{ dev: "kiki" }];

document.getElementById("btn-login").textContent =
  getCookie().level == 1 ? "Dashboard" : "Profile";

const hilightUl = (element) => {
  const ul = element.parentElement.querySelectorAll("li");
  const p = document.getElementById("description");
  changeDescription(element, p);
  ul.forEach((el) => {
    if (el !== element) {
      el.classList.add("bg-white");
    } else {
      el.classList.replace("bg-white", "bg-green-100");
    }
  });
};

const printSosialMedia = (p) => {
  p.innerHTML = `
    <div class="w-[400px] *:bg-gray-100 h-fit *:p-2 flex flex-rows *:text-center gap-2 *:flex-1">
      <span>Created by ${developer[0].dev}</span>
    </div>
    `;
};

const changeDescription = (params, paragraph) => {
  if (params.textContent.toLowerCase() == "about") {
    paragraph.textContent = about;
  } else if (params.textContent.toLowerCase() == "developer") {
    printSosialMedia(paragraph);
  } else {
    paragraph.innerHTML = "";
    getCookie()
      ? (window.location.href = "/pages/users/profile.html")
      : (window.location.href = "/pages/login.html");
  }
};

window.hilightUl = hilightUl;
