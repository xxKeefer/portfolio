let darkMode = localStorage.getItem("darkMode");
const darkmodeButton = document.querySelector('.darkmode-btn');

const enableDarkmode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkmode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkMode", null);
};

if (darkMode === 'enabled') {
    enableDarkmode();
}

darkmodeButton.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== 'enabled') {
    enableDarkmode();
  }else {
    disableDarkmode();
  }
});
