//Namespaces

const restaurantApp = {};

restaurantApp.platos = [
    {
        plato: 'Pizza',
        precio: 25
    },
    {
        plato: 'Hamburguesa',
        precio: 20
    },
    {
        plato: 'Hot dog',
        precio: 19
    },
]


restaurantApp.funciones = {
    mostrarMenu: platos => {
        console.log(`Bienvenidos a nuestro menú`);

        platos.forEach((plato, index) => {
            console.log(`${index} : ${plato.plato} $${plato.precio} `);
        });
    },
    ordenar: id => {
        console.log(`Tu plato ${restaurantApp.platos[id].plato} se esta preparando`);
    }
}


const { platos } = restaurantApp

restaurantApp.funciones.mostrarMenu(platos);

restaurantApp.funciones.ordenar(1);