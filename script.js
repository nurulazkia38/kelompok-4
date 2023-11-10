let menuOpen = document.querySelector(".menu-toggle");
let menu = document.querySelector(".menu-wrapper");

menuOpen.addEventListener("click", () => {
  menuOpen.classList.toggle("bx-x");
  menu.classList.toggle("active");
});

// sticky navbar
window.onscroll = function () {
  myFunction();
};
var navbar = document.querySelector(".container");

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
