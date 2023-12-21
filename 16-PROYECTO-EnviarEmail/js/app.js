document.addEventListener('DOMContentLoaded', function(){
    
    const email = {
        email: '',
        asunto: '',
        mensaje: ''
    }


    //Sleccionar los elementos de la intefaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type="submit"]');

    
    //Asignar eventos
    inputEmail.addEventListener('input', validar);
    inputAsunto.addEventListener('input', validar);
    inputMensaje.addEventListener('input', validar);



    function validar(e){
        if(e.target.value.trim() === ''){
            mostarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
            return;
        }

        if(e.target.id === 'email' && !validarEmail(e.target.value)) {
            mostarAlerta('El email no es válido', e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
            return;
        }

        limpiarAlerta(e.target.parentElement);

        //Asignar valores
        email[e.target.name] = e.target.value.trim().toLowerCase();

        //Comprobar email
        comprobarEmail();

    }

    function mostarAlerta(mensaje, referencia){

        
        limpiarAlerta(referencia);

        
        const error = document.createElement('P');

        error.textContent = mensaje;    
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');
        
        referencia.appendChild(error);

    }


    function limpiarAlerta(referencia){
        //Comprueba si ya existe una alerta
        const alerta = referencia.querySelector('.bg-red-600');

        if(alerta){
            alerta.remove();
        }
    }


    function validarEmail(email){
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

        const resultdo = regex.test(email);

        return resultdo;


    }


    function comprobarEmail(){

        if(Object.values(email).includes('')){
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;
            return;
        }

        btnSubmit.classList.remove('opacity-50');
        btnSubmit.disabled = false;
    }


});