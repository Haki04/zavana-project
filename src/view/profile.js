// show user
const showProfile = (content, data_user) => {
  content.innerHTML = `
    <div
        class="w-[300px] p-2 bg-white/85 rounded shadow-md flex flex-col justify-start items-center flex-wrap gap-5"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/40/Bahlil_Lahadalia%2C_Menteri_ESDM_%282024%29.jpg?utm_source=id.wikipedia.org&utm_campaign=index&utm_content=original"
          alt=""
          class="w-[200px] h-[200px] rounded-[50%] m-2 border-2"
        />
        <ul class="w-full px-2">
          <li class="p-2 border-2 mb-1 text-[20px]">
            Nama : <span class="uppercase font-bold">${data_user.name}</span>
          </li>
          <li class="p-2 border-2 mb-1 text-[20px]">
            Staf : <span class="uppercase font-bold">${data_user.position}</span>
          </li>
          <li class="p-2 border-2 mb-1 text-[20px]">
            As : <span class="uppercase font-bold">${data_user.level == 1 ? `Admin` : `Staff`}</span>
          </li>
        </ul>
        <button class="border-2 bg-red-400 p-1 w-[30%] self-start ml-2 mb-2">
          Log Out
        </button>
      </div>
    `;
};

// get user
const getUser = async () => {
  const cookies = document.cookie.split("; ");
  const name = cookies
    .find((cookie) => cookie.startsWith("name="))
    ?.split("=")[1];
  const {
    data: [{ user_name, position, user_level }],
  } = await fetch(
    `${import.meta.env.VITE_URL_FRONT_DEV}/users?name=${name}`,
  ).then((res) => res.json());
  if (document.cookie) {
    showProfile(document.getElementById("content"), {
      name: user_name,
      position: position,
      level: user_level,
    });
  } else {
    window.location.href = "/pages/login";
  }
};
getUser();
