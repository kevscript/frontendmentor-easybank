const burger = document.querySelector('.burger');
const burgerClosed = document.querySelector('.burger-closed');
const burgerOpened = document.querySelector('.burger-opened');
const mobileNav = document.querySelector('.navigation-mobile');

const initialNavState = () => {
  burgerOpened.style.display = "none";
  mobileNav.style.display = "none";
  burgerClosed.style.display = "block";
  burger.classList.remove('is-opened')
  burger.classList.add('is-closeed');
}

// 
burger.addEventListener('click', () => {
  const isOpen = burger.classList.contains('is-opened')
  if (isOpen) {
    initialNavState()
  } else {
    burgerClosed.style.display = "none";
    burgerOpened.style.display = "block";
    mobileNav.style.display = "block";
    burger.classList.remove('is-closed')
    burger.classList.add('is-opened');
  }
})

// set mobile navigation to its initial closed state 
// when window gets wider than 1170px breakpoint 
window.addEventListener('resize', () => {
  if (window.innerWidth >= 1170) {
    initialNavState()
  }
})