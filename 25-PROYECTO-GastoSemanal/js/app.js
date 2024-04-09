// Variables y selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');




// Eventos

eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
}


// Clases

class Presupuesto{

    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
    }

}


class UI {

}


let presupuesto;




// Funciones

function preguntarPresupuesto(){
    const presupuestoUsuario = prompt('¿Cual es tu presupuesto?');

    console.log( parseFloat(presupuestoUsuario) );

    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0){
        window.location.reload();
    }

    // 
    presupuesto = new Presupuesto();

}