//Module pattern

// const mostarCliente = nombre => {
//     console.log(nombre);
// }

// export default mostarCliente;


const module = (function() {

    const nombre = 'Dilan';

    function hola() {
        console.log('Hola');
    }

    return {
        nombre,
        hola
    }

    
})();