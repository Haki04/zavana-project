const section = ["hk", "ktn", "eng"];

window.login = () => {};

const getAsUser = async (name) => {
  const response = await fetch("http://localhost:3000/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
    }),
  }).then((res) => res.json());

  return response;
};

let timer;
window.cekUser = (name) => {
  clearTimeout(timer);
  timer = setTimeout(async () => {
    if (name !== "") {
      const [user] = await getAsUser(name);
      const sebagai = document.getElementById("sebagai");
      console.log(user);
      sebagai.innerHTML = "Sebagai : ";
      sebagai.innerHTML += `
            <span class="font-bold bg-amber-300 px-10 rounded uppercase">${user.position}</span>`;
    }
  }, 1000);
};
