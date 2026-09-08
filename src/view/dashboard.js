import { tombol_barang } from "../controller/controller";
import { printNav } from "./components/nav";
import { showTable } from "./components/table";

// load nav view

printNav(document.getElementById("navigation"));

// print contanet barang
showTable(document.getElementById("table-barang"));
