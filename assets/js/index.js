function mostrarPeliculas() 
{
    peliculas.forEach((pelis)=> {
    console.log(pelis);
    })
}

function buscarPorGenero()
{
    let generoBuscado = prompt("Ingrese el genero");
    if (generoBuscado){
        let resultadoGenero = peliculas.filter((peliculas) => peliculas.genero.toLowerCase().includes(generoBuscado.toLowerCase())); 
    if (resultadoGenero.length > 0){
        console.table(resultadoGenero);
    }
    else{
        alert("No se ha encontrado el genero")
    }
    }
}

function agregarPelicula()
{
    let nombrePelicula = prompt ("Ingrese el nombre de la Pelicula que desea agregar");
    let generoPelicula = prompt ("Ingrese el Genero de la Pelicula");
    let tiempoPelicula = prompt ("Ingrese la duracion de la Pelicula (min)");

    let ultimoId = peliculas.reduce((maxId, peliculas)=>Math.max(maxId, peliculas.id), 0);
    let newId = ultimoId + 1;

    let newPelicula = {
        id: newId,
        nombre: nombrePelicula,
        genero: generoPelicula,
        minutos: parseInt(tiempoPelicula),
    }

    peliculas.push(newPelicula)
    console.table(peliculas)
}

document.addEventListener('DOMContentLoaded',function(){
    const btnMostrarPeliculas = document.getElementById('btnMostrarPeliculas');
    const btnBuscarPorGenero = document.getElementById('btnBuscarPorGenero');
    const btnAgregarPelicula = document.getElementById('btnAgregarPelicula');

    btnMostrarPeliculas.addEventListener('click', mostrarPeliculas);
    btnBuscarPorGenero.addEventListener('click',buscarPorGenero);
    btnAgregarPelicula.addEventListener('click',agregarPelicula);
})




