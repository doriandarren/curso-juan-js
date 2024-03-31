
function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}


const juan = new Cliente('Juan', 400);


function formatearCliente(cliente){
    const {nombre, saldo} = cliente;
    return `El Cliente ${nombre} tiene un saldo de ${saldo}`;
}


console.log( formatearCliente(juan) );



function Empresa(nombre, saldo, categoria){
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const CCJ = new Empresa('Código con Juan', 4000, 'Curso en línea');

console.log( formatearCliente(CCJ) );