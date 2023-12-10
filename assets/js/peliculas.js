document.addEventListener("DOMContentLoaded", function (){
    
    const divContenedorTerror = document.getElementById("terror")
    const divContenedorComedia = document.getElementById("comedia")
    const divContenedorFiccion = document.getElementById("ficcion")
    const divContenedorAventura = document.getElementById("aventura")
    const divContenedorSuspenso = document.getElementById("suspenso")
    const URLPE = '../assets/js/peliculas.json'

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

    function armarErrorPelicula(){
        return `
        <li>
            <div class="contError">
                <img class="imagenError" src="../assets/images/error.png">
            </div>
            <p class="cartelError"> No se pudieron cargar las peliculas, intente mas tarde nuevamente.</p>
        </li>    
        <li>
            <div class="contError">
                <img class="imagenError" src="../assets/images/error.png">
            </div>
            <p class="cartelError"> No se pudieron cargar las peliculas, intente mas tarde nuevamente.</p>
        </li> 
        <li>
            <div class="contError">
                <img class="imagenError" src="../assets/images/error.png">
            </div>
            <p class="cartelError"> No se pudieron cargar las peliculas, intente mas tarde nuevamente.</p>
        </li> 
        <li>
            <div class="contError">
                <img class="imagenError" src="../assets/images/error.png">
            </div>
            <p class="cartelError"> No se pudieron cargar las peliculas, intente mas tarde nuevamente.</p>
        </li> 
        `
    }

    function agregarTerror(){
        const terror = peliculas.filter((pelicula)=> pelicula.genero === "terror");
        if (terror.length > 0) {
            terror.forEach((pelicula)=> divContenedorTerror.innerHTML += armarCardsPeliculas(pelicula))
        } else {
            divContenedorTerror.innerHTML = armarErrorPelicula
        }
    }

    function agregarComedia(){
        const comedia = peliculas.filter((pelicula)=> pelicula.genero === "comedia");
        if (comedia.length > 0) {
            comedia.forEach((pelicula)=> divContenedorComedia.innerHTML += armarCardsPeliculas(pelicula))
        } else {
            divContenedorTerror.innerHTML = armarErrorPelicula
        }
    }

    function agregarFiccion(){
        const ficcion = peliculas.filter((pelicula)=> pelicula.genero === "ficcion");
        if (ficcion.length > 0) {
            ficcion.forEach((pelicula)=> divContenedorFiccion.innerHTML += armarCardsPeliculas(pelicula))
        } else {
            divContenedorTerror.innerHTML = armarErrorPelicula
        }
    }

    function agregarAventura(){
        const aventura = peliculas.filter((pelicula)=> pelicula.genero === "aventura");
        if (aventura.length > 0) {
            aventura.forEach((pelicula)=> divContenedorAventura.innerHTML += armarCardsPeliculas(pelicula))
        } else {
            divContenedorTerror.innerHTML = armarErrorPelicula
        }
    }

    function agregarSuspenso(){
        const suspenso = peliculas.filter((pelicula)=> pelicula.genero === "suspenso");
        if (suspenso.length > 0) {
            suspenso.forEach((pelicula)=> divContenedorSuspenso.innerHTML += armarCardsPeliculas(pelicula))
        } else {
            divContenedorTerror.innerHTML = armarErrorPelicula
        }
    }

    async function obtenerPeliculas() {
        try {
            const response = await fetch (URLPE)
            const movies = await response.json()
            await peliculas.push(...movies)
            agregarTerror(peliculas)
            agregarComedia(peliculas)
            agregarFiccion(peliculas)
            agregarAventura(peliculas)
            agregarSuspenso(peliculas)
        } catch (error) {
            divContenedorTerror.innerHTML = armarErrorPelicula()
            divContenedorComedia.innerHTML = armarErrorPelicula()
            divContenedorFiccion.innerHTML = armarErrorPelicula()
            divContenedorAventura.innerHTML = armarErrorPelicula()
            divContenedorSuspenso.innerHTML = armarErrorPelicula()
        }
    }

    obtenerPeliculas()
}) 
