// Navbar Fixed
window.onscroll = function() {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector('#to-top');

  if(window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
    toTop.classList.remove('hidden');
    toTop.classList.add('flex');
  } else {
    header.classList.remove('navbar-fixed');
    toTop.classList.add('hidden');
    toTop.classList.remove('flex');
  }
} 

// Hamburger

const hamburger = document.querySelector('#hamburger');
const hamburgerLineTop = document.querySelector('#hamburger-line-top');
const hamburgerLineMid = document.querySelector('#hamburger-line-mid');
const hamburgerLineBottom = document.querySelector('#hamburger-line-bottom');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
  if(!hamburger.classList.contains('hamburger-active') && navMenu.classList.contains('hidden')) {
    hamburger.classList.add('hamburger-active');
    navMenu.classList.remove('hidden');
  } else {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
});

// click out humberger
window.addEventListener('click', function(e) {
  console.log(e.target);
  if(e.target !== hamburger && e.target !== navMenu && e.target !== hamburgerLineTop && e.target !== hamburgerLineMid && e.target !== hamburgerLineBottom ) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
});

// Dark Toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function() {
  if(darkToggle.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
  }
});

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  html.classList.add('dark');
  darkToggle.checked = true;
} else {
  html.classList.remove('dark');
  darkToggle.checked = false;
}