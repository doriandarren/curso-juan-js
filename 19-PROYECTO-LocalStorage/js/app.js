
/************************************
 ************************************
 *
 *             Variables
 * 
 ************************************
 ************************************/

const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];










/************************************
 ************************************
 *
 *              Eventos
 * 
 ************************************
 ************************************/

 eventListeners();

 function eventListeners(){
    //Cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet);

    //Cuando el documento este listo
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];
        console.log(tweets);

        crearHTML();
    });
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

    const tweetObj = {
        id: Date.now(),
        tweet
    }

    //Añadir al Arrglo de tweets
    tweets = [...tweets, tweetObj];

    //una vez agregado creamos el HTML
    crearHTML();

    //Reiniciar el form
    formulario.reset();



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


//Muestra un listado de tweets
function crearHTML() {

    limpiarHTML();

    if(tweets.length > 0){
        tweets.forEach(tweet => {

            //Agregar un boton de eliminar 
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'X';

            //Añadir la función 
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }


            //Crear HTML
            const li = document.createElement('li');
            li.innerText = tweet.tweet;

            //Asignar el boton
            li.appendChild(btnEliminar);

            //Agregar en el html
            listaTweets.appendChild(li);

        });
    }

    sincronizarStorage();

}


//Agregar al localstorage
function sincronizarStorage(){
    localStorage.setItem('tweets', JSON.stringify(tweets));
}


//Eliminar un tweet
function borrarTweet(id){
    tweets = tweets.filter(tweets => tweets.id !== id);
    crearHTML();
}



// Limpiar el HTML
function limpiarHTML(){
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);
    }
}
