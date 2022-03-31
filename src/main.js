//GENERAR CATALOGO DE PRODUCTOS
function GenerarCards(productoAMostrar){
    let acumulador = "";
    productoAMostrar.forEach(elemento =>
        acumulador += `<div class="producto p-3 d-flex flex-column align-items-center">
        <img class="img-fluid" src="${elemento.imagen}" alt="Portada">
        <h3 class="text-center py-2">${elemento.titulo}</h3>
        <h4>$${elemento.precio}</h4>
        <input value="1" min="1" id="cantidad-${elemento.id}" type="number" class="input-cantidad my-2"> 
        <button onclick="AgregarAlCarrito(productos[${elemento.id}])" type="button" class="btn btn-light">Agregar al carrito</button>
    </div>`)
    MostrarCardsHTML(acumulador)
}

function MostrarCardsHTML(cards){
    document.getElementById(`listado-productos`).innerHTML = cards
}

GenerarCards(productos)

// INPUT PARA BUSCAR PRODUCTOS
function buscarProducto(){
    const productoBuscado = document.getElementById("busqueda").value.trim().toUpperCase()
    const productoEncontrado = productos.filter((elemento) => {
        return elemento.titulo.toUpperCase().match(productoBuscado)
    })
    GenerarCards(productoEncontrado)
}

// evento!
let busqueda = document.getElementById("busqueda")
busqueda.onkeydown = (e) => {
    if (e.keyCode === 13) {
        buscarProducto()
    } 
}

// BARRA DE BOTONES PARA FILTRAR PRODUCTOS
const botonesFiltro = [
{id: 0 , nombre: `Rock` },
{id: 1 , nombre:`Pop`},
{id: 2 , nombre:`HipHop`},
{id: 3 , nombre:`Jazz/Blues`},
{id: 4 , nombre:`Dance/Electrónica`},
{id: 5 , nombre:`Latino`},
]

function FiltrarPorBotones(id){
    const productosAMostrar = productos.filter((elemento) => {
        return elemento.genero.match(id.nombre)
    })
    GenerarCards(productosAMostrar)
}

function GenerarBotones(botones){
    let acumulador = "";
    botones.forEach(elemento =>
        acumulador += `<button id="boton-filtro" onclick="FiltrarPorBotones(botonesFiltro[${elemento.id}])" type="button" class="btn btn-busqueda">${elemento.nombre}</button>`)
    MostrarBotonesFiltro(acumulador)
}

function MostrarBotonesFiltro(botones){
    document.getElementById(`botones-filtro`).innerHTML = botones
}

GenerarBotones(botonesFiltro)





