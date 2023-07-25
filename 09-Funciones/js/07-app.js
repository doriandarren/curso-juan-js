
iniciarApp();


function iniciarApp(){
    console.log('Iniciando app...');
    segundaFuncion();
}


function segundaFuncion() {
    console.log('Desde la segunda función');
    usuarioAutenticado('Dorian');
}

function usuarioAutenticado(usuario){
    console.log('Autenticando usuario... espere...');
    console.log(`Usario autenticado con exito, ${usuario}`);
}