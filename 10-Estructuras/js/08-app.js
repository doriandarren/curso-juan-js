

const autenticado = true;

if(autenticado === true){
    console.log('El usuario esta autenticado');
}

const puntos = 500;


function revisarPuntaje(){
    if(puntos > 400){
        console.log('Excelente!!');
        return;
    }
    
    if( puntos > 300){
        console.log('Buen puntaje... felicitaciones');
        return;
    }
}


revisarPuntaje();
