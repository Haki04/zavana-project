const datas = [
  {
    name: "kopi",
    total: "2",
    satuan: "pack",
    status_: "warning",
    img_: "input.png",
  },
  {
    name: "sate",
    total: "15",
    satuan: "pcs",
    status_: "save",
    img_: "input.png",
  },
];
export function showTable(element) {
  for (const data of datas) {
    element.innerHTML += `
     <tr class="border-2">
            <td class="flex justify-start gap-2">
              <img class="w-[30px] inline" src="/icon/${data.img_}" alt="">
              <span>${data.name}</span>
            </td>
            <td>${data.total}</td>
            <td>${data.satuan}</td>
            <td><span>${data.satuan}</span></td>
          <td>
         
          <span>edit</span> <span>hapus</span></td>
            </tr>`;
  }
}
