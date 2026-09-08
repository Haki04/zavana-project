import { cekSession } from "../controller/controller";
import { printNav } from "./components/nav";
import { showTable } from "./components/table";

// if (cekSession() == false) {
//   window.location.href = "/pages/users/login";
// }
// console.log(cekSession());
// load nav view

printNav(document.getElementById("navigation"));

// print contanet barang
showTable(document.getElementById("table-barang"));
