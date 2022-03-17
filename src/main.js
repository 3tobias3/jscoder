const carrito = []  

const productos = [
    {id: 0 , titulo: `Beerbongs & Bentleys - Post Malone`, genero: `HipHop` , precio: 4.999 , stock: 10, cantidad:0 , imagen: `https://http2.mlstatic.com/D_NQ_NP_720716-MLA29007755454_122018-O.jpg`},
    {id: 1 , titulo: `Blonde - Frank Ocean`, genero: `HipHop` , precio: 4.499 , stock: 0 , cantidad:0 , imagen: `https://www.mondosonoro.com/wp-content/uploads/2016/08/blonde-ocean.jpg`},
    {id: 2 , titulo: `Swimming - Mac Miller`, genero: `HipHop` , precio: 5.499 , stock: 5 , cantidad:0 , imagen: `https://indierocks.b-cdn.net/wp-content/uploads/2018/08/Mac-Miller.png`},
    {id: 3 , titulo: `A Moon Shaped Pool - Radiohead`, genero: `Rock Alternativo` , precio: 5.499 , stock: 5 , cantidad:0 , imagen: `https://m.media-amazon.com/images/I/815bmGN5LML._SL1200_.jpg`},
    {id: 4 , titulo: `In Rainbows - Radiohead`, genero: `Rock Alternativo` , precio: 4.999 , stock: 8 , cantidad:0 , imagen: `https://canchageneral.com/wp-content/uploads/2017/10/rainbows.jpg`},
    {id: 5 , titulo: `El Disko - Ca7riel`, genero: `HipHop`, precio: 5.499 , stock: 11 , cantidad:0 , imagen:`https://indiehoy.com/wp-content/uploads/2021/11/ca7riel.jpg`},
    {id: 6 , titulo: `Circles - Mac Miller`, genero: `HipHop`, precio: 5.999 , stock: 10 , cantidad:0 , imagen:`https://www.tierraadentro.cultura.gob.mx/wp-content/uploads/2020/03/mc.jpg`},
    {id: 7 , titulo: `The Great Escape - Volen Sentir`, genero: `Dance/Electrónica`, precio: 4.999 , stock: 3 , cantidad:0 , imagen:`https://geo-media.beatport.com/image_size/500x500/e5b013d5-9ef4-4ff8-8161-f478a622934c.jpg`},
    {id: 8 , titulo: `Blue Train - John Coltrane`, genero: `Jazz`, precio: 4.299 , stock: 6 , cantidad:0 , imagen:`https://img.discogs.com/PCpyxXFcalQRvM5YIqdVQW4fDqo=/fit-in/596x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-401058-1362858539-5386.jpeg.jpg`},
]

function MasProductos (){
    let eleccionDeProducto = prompt(`También podria interesarle: \n 1) Swimming - Mac Miller \n 2)Blonde - Frank Ocean \n 3) El Disko - Ca7riel \n Ingrese el número del producto que desea comprar, para salir, ingrese 0`)
    do{
        switch (eleccionDeProducto){
            case "1":
                AgregarAlCarrito(productos[2])
                break;
            case "2":
                AgregarAlCarrito(productos[1])
                break;
            case "3":
                AgregarAlCarrito(productos[5])
                break;
            case "0":
                break;
            default:
                alert(`El valor ingresado no es válido`)
                eleccionDeProducto = prompt(`También podria interesarle: \n 1) Swimming - Mac Miller \n 2)Blonde - Frank Ocean \n 3) El Disko - Ca7riel \n Ingrese el número del producto que desea comprar, para salir, ingrese 0`) 
        }
    }while ((eleccionDeProducto < 0) || (eleccionDeProducto > 3))
}

function MostrarCarrito(){
    let precioTotal = 0
        carrito.forEach(producto => {
        console.log(producto)
        })
        carrito.forEach(producto => {
            precioTotal += producto.precio
            })
        console.log(`El importe total es de $${precioTotal}`)
    
}

function AgregarAlCarrito(producto){
    producto.cantidad = Number(prompt(`¿Qué cantidad desea agregar a su carrito?`))
    producto.precio = producto.precio * producto.cantidad
    const validarStock = producto.stock >= producto.cantidad
    if (validarStock){
        carrito.push(producto)
    }else{
        console.log(`No hay suficiente stock`)
    }
}

function GenerarCards(productoAMostrar){
    let acumulador = "";
    productoAMostrar.forEach(elemento =>
        acumulador += `<div class="producto p-3 d-flex flex-column align-items-center">
        <img class="img-fluid" src="${elemento.imagen}" alt="Portada">
        <h4 class="text-center py-2">${elemento.titulo}</h4>
        <h5>$${elemento.precio}<h5>
        <button onclick="AgregarAlCarrito(productos[${elemento.id}]) ,  MasProductos()" type="button" class="btn btn-light">Agregar al carrito</button>
    </div>`)
    MostrarCardsHTML(acumulador)
}

function MostrarCardsHTML(cards){
    document.getElementById(`listado-productos`).innerHTML = cards
}

GenerarCards(productos)


function buscarProducto(){
    const productoBuscado = document.getElementById("busqueda").value.trim().toUpperCase()

    const productoEncontrado = productos.filter((elemento) => {
        return elemento.titulo.toUpperCase().match(productoBuscado)
    })

    GenerarCards(productoEncontrado)
}





