const navbar = document.querySelector(".js-navbar");

function showMenu(x) {
  x.classList.toggle('change');
  if (navbar.style.display === "block") {
    navbar.style.display = "none";
  } else {
    navbar.style.display = "block";
  }
}
