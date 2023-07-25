

const reproductor = {
    reproducir: function(id){
        console.log(`Repoduciendo cancion con el id ${id}`);
    },
    pausar: function(){
        console.log('pausando...');
    },
    borrar: function(id){
        console.log(`Borrando cancion... ${id}`);
    },
    crearPlaylist: function(nombre){
        console.log(`Creando PlayList: ${nombre}`);
    },
    reproducirPlaylist: function(nombre){
        console.log(`Repoduciendo la playlist: ${nombre}`);
    }
}

reproductor.reproducir(30);
reproductor.reproducir(20);

reproductor.pausar();

reproductor.borrar(30);
reproductor.crearPlaylist('Merengue');
reproductor.crearPlaylist('Rock 90');

reproductor.reproducirPlaylist('Rock 90');