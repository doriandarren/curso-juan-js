
/************************************
 ************************************
 *
 *             Variables
 * 
 ************************************
 ************************************/

const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
const tweets = [];










/************************************
 ************************************
 *
 *              Eventos
 * 
 ************************************
 ************************************/

 eventListeners();

 function eventListeners(){
    formulario.addEventListener('submit', agregarTweet);
 }








 /************************************
 ************************************
 *
 *              Funciones
 * 
 ************************************
 ************************************/

 function agregarTweet(e){
    e.preventDefault();


    const tweet = document.querySelector('#tweet').value;

   
    //Validación...
    if(tweet === ''){
        mostrarError('Un mensaj no puede ir vacio');
        return;
    }



    console.log(tweet);



 }



//Mostrar mensaje de error
function mostrarError(error){

    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    //Insertarlo en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    //Eliminar la alerta después de 3 segundos
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);

}
