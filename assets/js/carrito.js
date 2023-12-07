const shopcart = recuperarCarrito()

function guardarCarrito(carrito) {
    localStorage.setItem("Carrito", JSON.stringify(carrito))
}
document.addEventListener("DOMContentLoaded", function () {

    const tableBody = document.querySelector("tbody")

    function retornarFila(producto) {
        return `<tr>
        <td><img class="imagenAgregada" src=${producto.imagen}></td>
        <td>${producto.nombre}</td>
        <td>$${producto.precio}</td>
        <td id="${producto.id}">
        <button class="btnEliminar">Eliminar</button>
        </td>
        </tr>`;
    }

    function eliminarDelCarrito() {
        const botonesEliminar = document.querySelectorAll("button.btnEliminar")

        botonesEliminar.forEach((botonesEliminar) => {
            botonesEliminar.addEventListener("click", () => {
                const idx = shopcart.findIndex((producto) => producto.id === parseInt(botonesEliminar.parentElement.id))
                shopcart.splice(idx, 1)
                guardarCarrito(shopcart)
                cargarProductos()
            })
        })
    }

    function cargarProductos() {
        if (shopcart.length > 0) {
            tableBody.innerHTML = " "
            shopcart.forEach((producto) => tableBody.innerHTML += retornarFila(producto))
            eliminarDelCarrito()
        } else {
            tableBody.innerHTML = `<tr>
            <td>COMPRA</td>
            <td>TUS</td>
            <td>PRODUCTOS</td>
            <td><a href="./tienda.html" style="color: white; cursor: pointer;">AQUI</a></td>
            </tr>`
        }
    }
    cargarProductos()

    function comprarProductos() {
        const btnComprar = document.querySelector("button#btnComprar.botonComprar")
        btnComprar.addEventListener("click", () => {
            if (shopcart.length > 0) {
                Swal.fire({
                    title: "Confirmación de compra",
                    showDenyButton: true,
                    confirmButtonText: "Confirmar compra",
                    denyButtonText: "Volver al carrito"
                })
                    .then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire({
                                title: "Compra Finalizada!",
                                text: "Disfruta tus productos!",
                                showConfirmButton: false,
                                icon: "success",
                                timer: 2500
                            })

                            localStorage.removeItem("Carrito")

                            tableBody.innerHTML =   `<tr>
                                                        <td>COMPRA</td>
                                                        <td>TUS</td>
                                                        <td>PRODUCTOS</td>
                                                        <td><a href="./tienda.html" style="color: white; cursor: pointer;">AQUI</a></td>
                                                    </tr>`
                            shopcart.length = 0

                        } 
                    });
            }
            else {
                Swal.fire({
                    title: "Error",
                    text: "No tienes productos en el carrito",
                    icon: "error"
                })
            }
        })

    }

    comprarProductos()
})