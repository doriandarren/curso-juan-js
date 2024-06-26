
document.addEventListener('visibilitychange', () => {
    if(document.visibilityState === 'visible'){
        console.log('Ejecutar la funcion reporducir video...');
    }else{
        console.log('Pause video');
    }
});