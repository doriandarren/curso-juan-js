const cliente = {
    nombre: 'Juan',
    saldo: 500
}

console.log(cliente);



function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}


const juan = new Cliente('Juan', 400);

console.log(juan);