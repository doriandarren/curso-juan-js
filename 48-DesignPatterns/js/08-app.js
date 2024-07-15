
function Vendedor(nombre) {
    this.nombre = nombre;
    this.sala = null;
}

Vendedor.prototype = {
    oferta: (articulo, precio) => {
        console.log(`Articulo ${articulo} precio: ${precio}`);
    },
    vendido: comprador => {
        console.log(`Vendido a ${comprador}`);
    }
}

function Comprador(nombre) {
    this.nombre = nombre;
    this.sala = null;
}


Comprador.prototype = {
    oferta: (cantidad, comprador) => {
        console.log(`${comprador.nombre} : ${cantidad}`);
    },
}



function Subasta() {
    let compradores = {};

    return {
        registrar: usuario => {
            compradores[usuario.nombre] = usuario;
            usuario.sala = this;
        }
    }
}

//Crear objetos

const pelo = new Comprador('Pelo');
const pablo = new Comprador('Pablo');
const vendedor = new Vendedor('Vendedor de autos');
const subasta = new Subasta();


subasta.registrar(pelo);
subasta.registrar(pablo);
subasta.registrar(vendedor);


vendedor.oferta('Mustang 66', 300);

pelo.oferta(350, pelo);
pablo.oferta(450, pablo);

vendedor.vendido('Pablo');