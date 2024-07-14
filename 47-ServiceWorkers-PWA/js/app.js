
if('serviceWorker' in navigator){

    navigator.serviceWorker.register('./sw.js')
        .then( regisrado => console.log('Se instalo correctamente ', regisrado) )
        .catch( error => console.log('Fallo la instalación... ', error))

}else{
    console.log('Service Workers no soportado');
}