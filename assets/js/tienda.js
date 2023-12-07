let shopcart = []

document.addEventListener("DOMContentLoaded", function () {

    if (localStorage.getItem("Carrito")) {
        shopcart = JSON.parse(localStorage.getItem("Carrito"))
    }
    else {
        shopcart = []
    }

    const divContenedorVasos = document.getElementById("divcontenedorVasos")
    const divContenedorTermos = document.getElementById("divcontenedorTermos")
    const divContenedorEstatuillas = document.getElementById("divcontenedorEstatuillas")
    const divContenedorAccesorios = document.getElementById("divcontenedorAccesorios")
    const btnCarrito = document.querySelector("img#carrito.carrito")
    const buscarProductos = document.querySelector("input.inptBuscar")

    btnCarrito.addEventListener("mousemove", () => {
        if (shopcart.length > 0) {
            btnCarrito.title = `Tienes ${shopcart.length} producto/s`
        }
        else {
            btnCarrito.title = `Carrito vacio`
        }
    })

    buscarProductos.addEventListener("search", () => {
        let param = buscarProductos.value.trim().toLowerCase()
        let resultadoPorTipo = productos.filter((productos) => productos.tipo.toLowerCase().includes(param))
        console.table(resultadoPorTipo)
        let resultadoPorNombre = productos.filter((productos) => productos.nombre.toLowerCase().includes(param))
        console.table(resultadoPorNombre)
    })

    function armarCards(producto) {
        return `<li>
                    <img src=${producto.imagen}>
                    <p class="precios">${producto.precio}</p>
                    <button id="${producto.id}"class="botonCarrito">Agregar al carrito</button>
                </li>`

    }

    function agregarAlCarrito() {
        const botonesAgregar = document.querySelectorAll("button.botonCarrito")
        if (botonesAgregar.length > 0) {
            botonesAgregar.forEach((boton) => {
                boton.addEventListener("click", () => {
                    let productoSeleccionado = productos.find((producto) => producto.id === parseInt(boton.id))
                    shopcart.push(productoSeleccionado)
                    localStorage.setItem("Carrito", JSON.stringify(shopcart)) /* eliminar para vaciar carrito mientras no tenga boton*/
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Producto Agregado al Carrito!",
                        showConfirmButton: false,
                        timer: 750
                      })
                })
            })
        }
    }

    function cargarProductosVasos() {
        const vasos = productos.filter((producto) => producto.tipo === "vasos");
        if (vasos.length > 0) {
            vasos.forEach((producto) => divContenedorVasos.innerHTML += armarCards(producto))
        }
    }

    function cargarProductosTermos() {
        const termos = productos.filter((producto) => producto.tipo === "termos");
        if (termos.length > 0) {
            termos.forEach((producto) => divContenedorTermos.innerHTML += armarCards(producto))
        }
    }

    function cargarProductosEstatuillas() {
        const estatuillas = productos.filter((producto) => producto.tipo === "estatuillas");
        if (estatuillas.length > 0) {
            estatuillas.forEach((producto) => divContenedorEstatuillas.innerHTML += armarCards(producto))
        }
    }

    function cargarProductosAccesorios() {
        const accesorios = productos.filter((producto) => producto.tipo === "accesorios");
        if (accesorios.length > 0) {
            accesorios.forEach((producto) => divContenedorAccesorios.innerHTML += armarCards(producto))
        }
    }


    cargarProductosVasos()
    cargarProductosTermos()
    cargarProductosEstatuillas()
    cargarProductosAccesorios()
    agregarAlCarrito()

})  