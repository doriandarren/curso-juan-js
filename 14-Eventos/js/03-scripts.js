
const busqueda = document.querySelector('.busqueda');

// busqueda.addEventListener('keydown', () => {
//     console.log('escribiendo....');
// });


// busqueda.addEventListener('keyup', () => {
//     console.log('escribiendo....');
// });


// busqueda.addEventListener('blur', () => {
//     console.log('escribiendo....');
// });



busqueda.addEventListener('input', (e) => {

    if(e.target.value === ''){
        console.log('Fallo la validacion');
    }

    console.log(e.target.value);
});
