/*menu show*/
const showMenu = (toggleID, navID) =>{
    const toggle = document.getElementById(toggleID),
        nav = document.getElementById(navID)
    
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*active and remove menu*/
const navLink = document.querySelectorAll('.nav__link')

//active link
function linkAction(){
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

//remove the menu after the click
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

const navMenu = document.getElementById('nav-menu')
navMenu.classList.remove('show')

navLink.forEach(n => n.addEventListener('click', linkAction))

/*scroll reveal animation*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '66px',
    duration: 2000,
    reset: false
})

/*scroll home*/
sr.reveal('.home__title', {})
sr.reveal('.home__img', { delay: 600 })

/*publication highlight*/
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}