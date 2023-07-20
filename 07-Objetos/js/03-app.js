const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true,
}


// agregar nuevas propiedades al objecto
producto.imagen = "imagen.jpg";

// eliminar propiedades del objeto
delete producto.disponible;


console.log(producto);