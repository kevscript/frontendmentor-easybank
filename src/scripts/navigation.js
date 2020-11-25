const burger = document.querySelector('.burger');
const burgerClosed = document.querySelector('.burger-closed');
const burgerOpened = document.querySelector('.burger-opened');
const mobileNav = document.querySelector('.navigation-mobile');

burger.addEventListener('click', () => {
  const isOpen = burger.classList.contains('is-opened')
  console.log('is open:' + isOpen)
  if (isOpen) {
    burgerOpened.style.display = "none";
    mobileNav.style.display = "none";
    burgerClosed.style.display = "block";
    burger.classList.remove('is-opened')
    burger.classList.add('is-closeed');
  } else {
    burgerClosed.style.display = "none";
    burgerOpened.style.display = "block";
    mobileNav.style.display = "block";
    burger.classList.remove('is-closed')
    burger.classList.add('is-opened');
  }
})