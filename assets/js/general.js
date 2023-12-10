const productos = [];

const peliculas = [];

function recuperarCarrito(){
if (JSON.parse(localStorage.getItem("Carrito"))){
    return JSON.parse(localStorage.getItem("Carrito"))
}
else {
    return []
}
}   