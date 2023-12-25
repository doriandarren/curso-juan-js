document.addEventListener('DOMContentLoaded', function(){
    
    const email = {
        email: '',
        asunto: '',
        mensaje: ''
    }


    //Sleccionar los elementos de la intefaz
    const inputEmail = document.querySelector('#email');
    const inputCc = document.querySelector('#cc');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type="submit"]');
    const btnReset = document.querySelector('#formulario button[type="reset"]');
    const spinner = document.querySelector('#spinner');

    
    //Asignar eventos
    inputEmail.addEventListener('input', validar);
    inputAsunto.addEventListener('input', validar);
    inputMensaje.addEventListener('input', validar);
    inputCc.addEventListener('input', validar);



    formulario.addEventListener('submit', enviarEmail);


    btnReset.addEventListener('click', function(e){
        e.preventDefault();
        
        resetFormulario();
        
    });


    function enviarEmail(e) {
        e.preventDefault();
        spinner.classList.add('flex');
        spinner.classList.remove('hidden');

        setTimeout(() => {
            spinner.classList.remove('flex');
            spinner.classList.add('hidden');

            resetFormulario();

            //Crear Alerta

            const alertaExito = document.createElement('P');
            alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10', 'font-bold', 'text-sm', 'uppercase');

            alertaExito.textContent = 'Mensaje enviado';

            formulario.appendChild(alertaExito);

            setTimeout(() => {
                alertaExito.remove();
            }, 3000);


        }, 3000);

    }


    function validar(e){


        if(e.target.id === 'cc'){


            if(e.target.value !== ''){


                limpiarAlerta(e.target.parentElement);

                console.log('el input cc tiene valor');

                if(!validarEmail(e.target.value)){
                    mostarAlerta('El email no es válido', e.target.parentElement);
                    email[e.target.name] = '';
                    comprobarEmail();
                    return;
                }


            }else{
                console.log('el inpit cc NOOO tiene valor');
            }

            return;
        }


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



    function resetFormulario(){
        //reiniciar el objeto
        email.email = '';
        email.asunto = '';
        email.mensaje = '';

        formulario.reset();
        comprobarEmail();
    }


});