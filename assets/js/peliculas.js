document.addEventListener("DOMContentLoaded", function (){
    
    const divContenedorTerror = document.getElementById("terror")
    const divContenedorComedia = document.getElementById("comedia")
    const divContenedorFiccion = document.getElementById("ficcion")
    const divContenedorAventura = document.getElementById("aventura")
    const divContenedorSuspenso = document.getElementById("suspenso")

    function armarCardsPeliculas(pelicula){
        return `
        <li class="card">
            <div class="face front">
                <img src="${pelicula.imagen}">
            </div>
            <div class="face back">
                <div class="back-content">
                <p class="card-text">${pelicula.resumen}</p>
                </div>
            </div>
        </li>
        `
    }

    function agregarTerror(){
        const terror = peliculas.filter((pelicula)=> pelicula.genero === "terror");
        console.log(terror)
        if (terror.length > 0) {
            terror.forEach((pelicula)=> divContenedorTerror.innerHTML += armarCardsPeliculas(pelicula))
        }
    }

    function agregarComedia(){
        const comedia = peliculas.filter((pelicula)=> pelicula.genero === "comedia");
        console.log(comedia)
        if (comedia.length > 0) {
            comedia.forEach((pelicula)=> divContenedorComedia.innerHTML += armarCardsPeliculas(pelicula))
        }
    }

    function agregarFiccion(){
        const ficcion = peliculas.filter((pelicula)=> pelicula.genero === "ficcion");
        console.log(ficcion)
        if (ficcion.length > 0) {
            ficcion.forEach((pelicula)=> divContenedorFiccion.innerHTML += armarCardsPeliculas(pelicula))
        }
    }

    function agregarAventura(){
        const aventura = peliculas.filter((pelicula)=> pelicula.genero === "aventura");
        console.log(aventura)
        if (aventura.length > 0) {
            aventura.forEach((pelicula)=> divContenedorAventura.innerHTML += armarCardsPeliculas(pelicula))
        }
    }

    function agregarSuspenso(){
        const suspenso = peliculas.filter((pelicula)=> pelicula.genero === "suspenso");
        console.log(suspenso)
        if (suspenso.length > 0) {
            suspenso.forEach((pelicula)=> divContenedorSuspenso.innerHTML += armarCardsPeliculas(pelicula))
        }
    }

    agregarTerror()
    agregarComedia()
    agregarFiccion()
    agregarAventura()
    agregarSuspenso()
}) 
