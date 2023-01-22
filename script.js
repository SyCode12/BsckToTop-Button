ScrollReveal({
    reset:true,
    distance:'60px',
    duration:1500,
    delay:300
})
ScrollReveal().reveal('#title',{delay: 100, origin: 'top'})
ScrollReveal().reveal('.first',{delay: 200, origin: 'right'})
ScrollReveal().reveal('.second',{delay: 300, origin: 'left'})
ScrollReveal().reveal('.third',{delay: 400, origin: 'right'})
ScrollReveal().reveal('.fourth',{delay: 100, origin: 'left'})
ScrollReveal().reveal('.fifth',{delay: 200, origin: 'right'})
ScrollReveal().reveal('.last',{delay: 300, origin: 'bottom'})
let bTn = document.querySelector('#back-to-top');
window.addEventListener('scroll', backToTop);

function backToTop(){
    if(window.pageYOffset > 1000){
        bTn.style.opacity ='1'
        bTn.style.transform = 'translateY(-30px)';
    }
    else{
        bTn.style.opacity = '0';
        bTn.style.transform = 'translateY(30px)';
    } 
}
bTn.addEventListener('click',()=> window.scrollTo(0,0))