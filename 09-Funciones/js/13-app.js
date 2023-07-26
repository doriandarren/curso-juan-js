const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Repoduciendo cancion con el id ${id}`),
    pausar: () => console.log('pausando...'),
    borrar: id => console.log(`Borrando cancion... ${id}`),
    crearPlaylist: nombre => console.log(`Creando PlayList: ${nombre}`),
    reproducirPlaylist: nombre => console.log(`Repoduciendo la playlist: ${nombre}`),

    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);

    },

    get obtenerCancion() {
        console.log(`${this.cancion}`);
    }


}

reproductor.nuevaCancion = 'Ender Sandman';
reproductor.obtenerCancion;






reproductor.reproducir(30);
reproductor.reproducir(20);

reproductor.pausar();

reproductor.borrar(30);
reproductor.crearPlaylist('Merengue');
reproductor.crearPlaylist('Rock 90');

reproductor.reproducirPlaylist('Rock 90');