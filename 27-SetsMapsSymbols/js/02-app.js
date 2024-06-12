//Almacena solamente objetos
const weakset = new WeakSet();


const cliente = {
    nombre: 'Juan',
    saldo: 100
}

// const nombre = 'Juan';
// weakset.add(nombre);


weakset.add(cliente);

console.log(weakset);