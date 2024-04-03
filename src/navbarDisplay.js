


let topnav = document.querySelector('.topnav');
let navbarIcon = document.querySelector('.navbar-icon');
let exitIcon = document.querySelector('.exit-icon');
let topnavLinks = document.querySelector('.topnav-links');


function expandNavbar(){
  navbarIcon.addEventListener('click', ()=>{
      topnav.classList.add('topnav-clicked')
      exitIcon.classList.remove('display-none')
      topnavLinks.classList.remove('display-none');
      navbarIcon.classList.add('display-none')
  })
}

function closeNavbar(){
  exitIcon.addEventListener('click', ()=>{
    topnavLinks.classList.add('display-none');
    exitIcon.classList.add('display-none')
    navbarIcon.classList.remove('display-none')
    topnav.classList.remove('topnav-clicked')
  })
}

export { expandNavbar, closeNavbar}