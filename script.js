const burger = document.querySelector('.burger');
const closeBtn = document.querySelector('.close-btn');
const navBar = document.querySelector('.toggles');
const navItem = document.querySelectorAll('.nav-item');

burger.onclick = function () {
  navBar.classList.toggle('click');
  document.body.style.overflow = 'hidden';
};

closeBtn.onclick = function () {
  navBar.classList.remove('click');
  document.body.style.overflow = 'visible';
};

navItem.forEach((link) => {
  link.onclick = function () {
    navBar.classList.remove('click');
    document.body.style.overflow = 'visible';
  };
});