let navbar= document.querySelector('.header-section .menu');

document.querySelector('.header-section .bar').onclick = () =>{
    navbar.classList.add('active');
}

document.querySelector('.header-section .close').onclick = () =>{
    navbar.classList.remove('active');
}