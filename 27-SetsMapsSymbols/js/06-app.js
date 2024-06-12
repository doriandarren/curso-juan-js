

function crearIterador(carrito){
    
    let i = 0;

    return{
        siguiente: () => {
            const fin = ( i >= carrito.length);
            const valor = !fin ? carrito[i++] : undefined;

            return {
                fin, valor
            }
        }
    }

}


const carrito = ['Poructo 1', 'Porducto 2', 'Producto 3'];

const recorrerCarrito = crearIterador(carrito);


console.log(recorrerCarrito.siguiente());