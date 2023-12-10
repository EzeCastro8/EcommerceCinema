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
    const URLPR = '../assets/js/productos.json'
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
        divContenedorVasos.innerHTML = "";
        divContenedorTermos.innerHTML = "";
        divContenedorEstatuillas.innerHTML = "";
        divContenedorAccesorios.innerHTML = "";

        let resultadoPorTipo = productos.filter((productos) => productos.tipo.toLowerCase().includes(param))
        console.table(resultadoPorTipo)

        if (resultadoPorTipo.length > 0) {
            resultadoPorTipo.forEach((producto)=>{
            if (producto.tipo === "vasos"){
                divContenedorVasos.innerHTML += armarCards(producto);
            } else if (producto.tipo === "termos"){
                divContenedorTermos.innerHTML += armarCards(producto);
            }
            else if (producto.tipo === "estatuillas"){
                divContenedorEstatuillas.innerHTML += armarCards(producto);
            }
            else if (producto.tipo === "accesorios"){
                divContenedorAccesorios.innerHTML += armarCards(producto);
            }
        })
        }
        
        let resultadoPorNombre = productos.filter((productos) => productos.nombre.toLowerCase().includes(param))
        console.table(resultadoPorNombre)

        if (resultadoPorNombre.length > 0) {
            resultadoPorNombre.forEach((producto)=>{
            if (producto.tipo === "vasos"){
                divContenedorVasos.innerHTML += armarCards(producto);
            } else if (producto.tipo === "termos"){
                divContenedorTermos.innerHTML += armarCards(producto);
            }
            else if (producto.tipo === "estatuillas"){
                divContenedorEstatuillas.innerHTML += armarCards(producto);
            }
            else if (producto.tipo === "accesorios"){
                divContenedorAccesorios.innerHTML += armarCards(producto);
            }
        })
        }
        agregarAlCarrito()
    })

       /* if (resultadoPorTipo.length > 0) {
            resultadoPorTipo.forEach((producto) => divContenedorPrincipal.innerHTML += armarCards(producto));
        }
    
        if (resultadoPorNombre.length === 0 && resultadoPorTipo.length === 0) {
            divContenedorPrincipal.innerHTML = armarErrorProductos();
        }
        
        if (param.length === ""){
            productos.forEach((producto) => divContenedorPrincipal.innerHTML += armarCards(producto))
        } */

    

    function armarCards(producto) {
        return `<li>
                    <img src=${producto.imagen}>
                    <p class="precios">$${producto.precio}</p>
                    <button id="${producto.id}"class="botonCarrito">Agregar al carrito</button>
                </li>`

    }

    function armarErrorProductos() {
        return `
                    <li>
                        <div class="contError">
                            <img class="imagenError" src="../assets/images/error.png">
                        </div>
                        <p class="cartelError">No se pudieron cargar los productos, intente mas tarde nuevamente.</p>
                    </li>
                    <li>
                        <div class="contError">
                            <img class="imagenError" src="../assets/images/error.png">
                        </div>
                        <p class="cartelError">No se pudieron cargar los productos, intente mas tarde nuevamente.</p>
                    </li>
                    <li>
                        <div class="contError">
                            <img class="imagenError" src="../assets/images/error.png">
                        </div>
                        <p class="cartelError">No se pudieron cargar los productos, intente mas tarde nuevamente.</p>
                    </li>
                    <li>
                        <div class="contError">
                            <img class="imagenError" src="../assets/images/error.png">
                        </div>
                        <p class="cartelError">No se pudieron cargar los productos, intente mas tarde nuevamente.</p>
                    </li>
                    
                 `
    }

    function agregarAlCarrito() {
        const botonesAgregar = document.querySelectorAll("button.botonCarrito")
        if (botonesAgregar.length > 0) {
            botonesAgregar.forEach((boton) => {
                boton.addEventListener("click", () => {
                    let productoSeleccionado = productos.find((producto) => producto.id === parseInt(boton.id))
                    shopcart.push(productoSeleccionado)
                    localStorage.setItem("Carrito", JSON.stringify(shopcart))
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
        } else {
            divContenedorVasos.innerHTML = armarErrorProductos()
        }
    }

    function cargarProductosTermos() {
        const termos = productos.filter((producto) => producto.tipo === "termos");
        if (termos.length > 0) {
            termos.forEach((producto) => divContenedorTermos.innerHTML += armarCards(producto))
        } else {
            divContenedorTermos.innerHTML = armarErrorProductos()
        }
    }

    function cargarProductosEstatuillas() {
        const estatuillas = productos.filter((producto) => producto.tipo === "estatuillas");
        if (estatuillas.length > 0) {
            estatuillas.forEach((producto) => divContenedorEstatuillas.innerHTML += armarCards(producto))
        } else {
            divContenedorEstatuillas.innerHTML = armarErrorProductos()
        }
    }

    function cargarProductosAccesorios() {
        const accesorios = productos.filter((producto) => producto.tipo === "accesorios");
        if (accesorios.length > 0) {
            accesorios.forEach((producto) => divContenedorAccesorios.innerHTML += armarCards(producto))
        } else {
            divContenedorAccesorios.innerHTML = armarErrorProductos()
        }
    }

    async function obtenerProductos(){
        try {
            const response = await fetch(URLPR)
            const prods = await response.json()
            await productos.push(...prods)
            cargarProductosVasos(productos)
            cargarProductosTermos(productos)
            cargarProductosEstatuillas(productos)
            cargarProductosAccesorios(productos)
            agregarAlCarrito()
        } catch (errorPR) {
            divContenedorVasos.innerHTML = armarErrorProductos()
            divContenedorTermos.innerHTML = armarErrorProductos()
            divContenedorEstatuillas.innerHTML = armarErrorProductos()
            divContenedorAccesorios.innerHTML = armarErrorProductos()
        }
    }
    
    obtenerProductos()

})  