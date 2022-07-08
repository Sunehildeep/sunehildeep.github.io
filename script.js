const myNav = document.getElementById('navheader')

window.onscroll = function() {
  if(window.scrollY > window.innerHeight-300){
    myNav.classList.add('scrolled')
  }else{
    myNav.classList.remove('scrolled')
  }
}