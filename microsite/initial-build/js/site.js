// mobile menu
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
if (toggle){
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
}

// add .is-active based on current path
const here = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.site-nav a').forEach(a=>{
  if(a.getAttribute('href') === here){ a.classList.add('is-active'); }
});
