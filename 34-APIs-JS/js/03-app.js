window.addEventListener('online', actulizarEstado);
window.addEventListener('offline', actulizarEstado);


function actulizarEstado(){
    if(navigator.onLine){
        console.log('Hay internet')
    }else{
        console.log('No estas conectado')
    }
}