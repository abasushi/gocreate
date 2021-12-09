/*===== MENU SHOW Y HIDDEN =====*/
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle-btn'),
    closeMenu = document.getElementById('nav-close-btn')

// SHOW
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

// HIDDEN
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

//FUNCTION TO MOVE IMG
document.addEventListener('mousemove', move);
function move(e){
    this.querySelectorAll('.move').forEach(layer =>{
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*speed)/320
        const y = (window.innerHeight - e.pageY*speed)/320

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}