import { mostarAlerta, validar } from './funciones.js';
import { obtenerCliente, editarCliente } from "./API.js";

(function() {

    // Campos del formulario
    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const empresaInput = document.querySelector('#empresa');
    const telefonoInput = document.querySelector('#telefono');
    const idInput = document.querySelector('#id');

    document.addEventListener('DOMContentLoaded', async () => {
        
        const parametroURL = new URLSearchParams(window.location.search);

        const clienteId = parametroURL.get('id');

        const cliente = await obtenerCliente(clienteId);

        mostarCliente(cliente);

        //Submit
        const formulario = document.querySelector('#formulario');
        formulario.addEventListener('submit', validarCliente);

    });


    function mostarCliente(cliente) {
        const { nombre, empresa, email, telefono, id } = cliente;

        nombreInput.value = nombre;
        empresaInput.value = empresa;
        telefonoInput.value = telefono;
        emailInput.value = email;
        idInput.value = id;

    }



    function validarCliente(e) {
        e.preventDefault();

        const cliente = {
            nombre: nombreInput.value,
            email: emailInput.value, 
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            id: idInput.value
        }


        
        if(validar(cliente)){
            mostarAlerta('Todos los campos son obligatorios');
            return;
        }


        //Reescribe

        editarCliente(cliente);


    }


})();