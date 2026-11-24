import { showStaffBoxs } from "./staff";
import avarageData from "./avarage-data";
import avarageBrokenFixed from "./avarage-broken-fixed";
export const dashboardItems = (element) => {
  element.insertAdjacentHTML(
    "afterbegin",
    `<div class='w-full p-2 border-2 flex flex-row gap-2' id="dashboard-item-staff"></div> 
    <div class='w-full p-2 border-2 grid grid-cols-4 grid-rows-3 gap-2' id="dashboard-item-avarage-data"></div>
    <div class='w-full p-2 border-2' id="dashboard-item-broken">
    <span class="block ml-1 text-[12px] opacity-30">persetation have been fixed</span>
    </div> 
    `,
  );
  // staff
  showStaffBoxs("dashboard-item-staff");

  // avaraga stocks use in a month
  avarageData("dashboard-item-avarage-data");

  // persetation broken have fixed
  avarageBrokenFixed("dashboard-item-broken");
};

export default dashboardItems;
