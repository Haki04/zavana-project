const data_nomor_kilo = {
    101: "45016493095",
    102: "45016450384",
    103: "45016493186",
    104: "45016407533",
    105: "45016498490",
    106: "45016498540",
    107: "14440080373",
    111: "14464998617",
    112: "14464990457",
    113: "14466264893",
    114: "14464857409",
    115: "14464995308",
    116: "14466264885",
    117: "14466264877",
    "rst" : "441501200241",
    "ktn": "86261240013",
    "grn": "86246338528"
};

document.getElementById("ket").selectedIndex = 0
// process
window.addEventListener('beforeunload', function (e) {
    e.preventDefault();
    e.returnValue = ''; // Mencegah refresh atau keluar dari halaman
});

function getDataRooms(nomor_kilo, room_number, saldo, ket) {
    return [`* ${room_number.toUpperCase()} ~ ${saldo} => ${nomor_kilo[room_number.toLowerCase()]}  [${ket}]`];
}

let will_be_enter = [];

function print_data_room(n, s, k) {
    will_be_enter.push(getDataRooms(data_nomor_kilo, n, s, k));
    numberItemAdd(document.getElementById("number-room"), will_be_enter.length);
    return will_be_enter;
}

function clicked(event) {
    event.preventDefault();

    const input_saldo = document.getElementById("saldo");
    const input_nomor_kamar = document.getElementById("kamar");
    const description = document.getElementById("ket");

    checkExistRoom(data_nomor_kilo, input_nomor_kamar.value, input_saldo.value,description.value);

    resetInput(input_nomor_kamar, saldo, description);
}

// text copy
let text_data = "";

function copyText(d) {
    text_data = makeDate()
  document.getElementById('date').textContent = text_data
  makeList(d)
    
}

function makeDate(){
    return `
  Report : ${month()}  ${new Date().getDate()}, ${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}`;
}

function formatTextClipboard(data){
  let formatText = `${makeDate()}\n`
  for(let i = 0; i < data.length;i++ ) {
    formatText += `${data[i]}\n`
  }
  
  return formatText
}

function makeList(item){
    const ul = document.getElementById("list")
    const dates = document.getElementById("date")
    ul.innerHTML = ""
  for(let i = 0; i < item.length; i++){
    const li = document.createElement("li")
    let text = document.createTextNode(item[i])
    li.appendChild(text)
    ul.appendChild(li)
    
  }
}

function resetInput(room, saldo, description) {
    room.value = "";
    saldo.value = "";
    description.selectedIndex = 0;
}

function hiddenItem(item) {
    item.classList.remove("hidden");
    setTimeout(() => {
        item.classList.add("hidden");
    }, 2000);
}

function numberItemAdd(item, count_item) {
    item.textContent = count_item;
}

function checkExistRoom(data_room, n_room, i_saldo, ket_room) {
    if (!data_room.hasOwnProperty(n_room.toLowerCase())) {
        alert("Nomor kamar | Input yang kamu masukkan tidak tersedia");
        return;
    } else {
        copyText(print_data_room(n_room, i_saldo, ket_room));

        hiddenItem(document.getElementById("notif"));
    }
}

function copyToClipboard() {
    navigator.clipboard.writeText(formatTextClipboard(will_be_enter)).then(() => {
      copyed(document.getElementById("icon-copy"))
        alert("berhasil di salin");
    });
}

function copyed(e){
  e.innerHTML = "👍"
}

function month() {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    return months[new Date().getMonth()];
}

/* function day(){
  const days = ["Monday", "Tursday", "Wednesday", "Thusday", "Friday", "Saurday", "Sunday"]
  
    return days[new Date().getDay()]
  }*/

function hiddenBox(e, ket) {
  if (ket.getAttribute("data") === "true") {
        e[0].setAttribute("id", "copy")
        ket.setAttribute("data", "false");
    } else {
        e[0].removeAttribute("id")
        ket.setAttribute("data", "true");
    }
}

