const navbar = document.querySelector(".js-navbar");
const links = document.querySelectorAll('.js-nav-item');
const sections = document.querySelectorAll('section');

function showMenu(x) {
  x.classList.toggle('change');
  if (navbar.style.display === "block") {
    navbar.style.display = "none";
  } else {
    navbar.style.display = "block";
  }
}

function changeLinkState() {
  let index = sections.length;

  while(--index && window.scrollY + 50 < sections[index].offsetTop) {}
  
  links.forEach((link) => link.classList.remove('active'));
  links[index].classList.add('active');
}

changeLinkState();
window.addEventListener('scroll', changeLinkState);