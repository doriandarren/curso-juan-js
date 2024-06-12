

function *crearGenerador(){

    yield 1; //Cada Next recorre el yield
    yield 'Juan';
    yield 3+3;
    yield true;

}


const iterador = crearGenerador();

// console.log(iterador);
// console.log(iterador.next().value);
// console.log(iterador.next());
// console.log(iterador.next().value);
// console.log(iterador.next());
// console.log(iterador);




function *generadorCarrito(carrito){

    for(let i=0; i<carrito.length; i++){
        yield carrito[i];
    }
}


const carrito = ['Poructo 1', 'Porducto 2', 'Producto 3'];

const iterador1 = generadorCarrito(carrito);

console.log(iterador.next().value);
