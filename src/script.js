var menuBtn = document.getElementById("menu-btn");
var dropdownMenu = document.getElementById("dropdown-menu");

menuBtn.addEventListener("click", () => {
  if (dropdownMenu.classList.contains("flex")) {
    dropdownMenu.classList.remove("flex");
    dropdownMenu.classList.add("hidden");
  } else {
    dropdownMenu.classList.remove("hidden");
    dropdownMenu.classList.add("flex");
  }
});
