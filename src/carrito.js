const carrito = validarStorageCarrito()
function validarStorageCarrito(){
    if (localStorage.getItem("carrito") != null){
        const storageCarrito = JSON.parse(localStorage.getItem("carrito"));
        return storageCarrito
    }
    else{
        return []
    }
}

function generarCardsCarrito(productoAMostrar){
    let acumulador = "";
    productoAMostrar.forEach(elemento =>
        acumulador += `<div class="container d-flex flex-row justify-content-between align-items-center producto-carrito">
        <img class="foto-producto-carrito img-fluid" src="${elemento.imagen}" alt="">
        <h5>${elemento.titulo}</h5>
        <h5 >${elemento.cantidad}</h5>
        <h5>$${elemento.precio}</h5>
    </div>`)
    mostrarCarritoHTML(acumulador)
}

function mostrarCarritoHTML(productos){
    document.getElementById("carrito").innerHTML = productos
}

generarCardsCarrito(carrito)

function prueba (){
    console.log(carrito.length)
}