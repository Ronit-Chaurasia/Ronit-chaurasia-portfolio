let menuBtn = document.querySelector(".hamburger");
let mobile_menu = document.querySelector(".navbar .navbar-container ul");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  mobile_menu.classList.toggle("open");

  menuBtn.classList.toggle("open");
});
