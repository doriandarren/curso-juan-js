const usuario =true;
const puedePagar = true;

if(usuario && puedePagar){
    console.log('Si puedes comprar');
}else if(!usuario && !puedePagar){
    console.log('No puedes comprar');
}else if(!usuario){
    console.log('Inicias sesión o crea una cuenta');
}else if(!puedePagar){
    console.log('Fondos insuficientes');
}