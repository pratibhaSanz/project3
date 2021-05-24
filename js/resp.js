  burger = document.querySelector('.burger')
  navbar = document.querySelector('.navbar')
  navlist = document.querySelector('.nav-list')
  navright = document.querySelector('.nav-right')

  burger.addEventListener('click',()=>{
    navright.classList.toggle('v-class');
    navlist.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');

  })