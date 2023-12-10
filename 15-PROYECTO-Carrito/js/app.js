// Variables

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');

let articulosCarrito = [];


cargarEventListeners();

function cargarEventListeners(){
    // Agregar btn "Agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);

    //Elimina cursos del carrito
    carrito.addEventListener('click', eliminaCurso);

    vaciarCarritoBtn.addEventListener('click', (e) => {
        e.preventDefault();
        articulosCarrito = [];
        limpiarHTML();
    });

}


//Funciones

function agregarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}


//Elimina un curso del carrito
function eliminaCurso(e) {
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id');

        //Elimina del arreglo por el data-id

        articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId);


        //console.log(cursoId);

        carritoHTML(); // Iterar sobre el carrito y mostrar su HTML


    }
}


//Lee el contenido Html

function leerDatosCurso(curso){
    //console.log(curso);

    //Crear un objeto 
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }


    //revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id );

    if(existe){
        //Actualizamos la cantidad

        const cursos = articulosCarrito.map( curso => {
            if(curso.id === infoCurso.id){
                curso.cantidad++;
                return curso;
            }else{
                return curso;
            }
        } );

        articulosCarrito = [...cursos];

    }else{
        //Agregamos el curso al carrito

        //agregar ekementos al arreglo de carrito
        articulosCarrito = [...articulosCarrito, infoCurso];
    }


    console.log(articulosCarrito);

    carritoHTML();

}



//Muestar el carrito de compras
function carritoHTML() {

    //Limpiar Html
    limpiarHTML();


    articulosCarrito.forEach((curso) => {
        const { imagen, titulo, precio, cantidad, id } = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${imagen}" width="100">
            </td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}" > X </a>
            </td>
        `;

        //Agrega el Html del carrito en el tbody

        contenedorCarrito.appendChild(row);

    });

}


//Eliminar los cursos del tbody
function limpiarHTML() {
    // Forma lenta
    //contenedorCarrito.innerHTML = '';


    // Forma más rápida
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }


}