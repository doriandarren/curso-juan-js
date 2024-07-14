
// const cliente = 'Juan';


// function mostrarCliente() {
//     const cliente = 'Pape';
//     console.log(cliente);
// }

// mostrarCliente();


const obtenerCliente = () => {
    const nombre = 'Mexico';

    function muestraNombre() {
        console.log(nombre);
    }

    return muestraNombre;
}


const cliente = obtenerCliente();
cliente();