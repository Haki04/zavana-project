const list_navigation = [
  { name: "inventory", icon: "box.png" },
  { name: "pesanan", icon: "order.png" },
  { name: "input", icon: "input.png" },
];

export function printNav(element) {
  for (const { name, icon } of list_navigation) {
    element.innerHTML += `
   <li class="p-2 flex justify-start gap-3 cursor-pointer"><img class="w-[20px]" src="/icon/${icon}"><span class="text-[16px]">${name}</span></li>
    `;
  }
}
