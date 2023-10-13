const nav = document.querySelector('.navegacion');

//registrar un evento

nav.addEventListener('click', () => {
    console.log('click en nav');
});



nav.addEventListener('mouseout', () => {
    console.log('Saliendo en nav');
    nav.style.backgroundColor = 'transparent';
});


nav.addEventListener('mouseenter', () => {
    console.log('Entrando en nav');
    nav.style.backgroundColor = 'white';
});