// base de datos de productos
const productos = [
    { id: 0, titulo: `Beerbongs & Bentleys - Post Malone`, genero: `HipHop`, precio: 4.999, stock: 10, cantidad: 0, imagen: `https://http2.mlstatic.com/D_NQ_NP_720716-MLA29007755454_122018-O.jpg` },
    { id: 1, titulo: `Blonde - Frank Ocean`, genero: `HipHop`, precio: 4.499, stock: 0, cantidad: 0, imagen: `https://www.mondosonoro.com/wp-content/uploads/2016/08/blonde-ocean.jpg` },
    { id: 2, titulo: `Swimming - Mac Miller`, genero: `HipHop`, precio: 5.499, stock: 5, cantidad: 0, imagen: `https://indierocks.b-cdn.net/wp-content/uploads/2018/08/Mac-Miller.png` },
    { id: 3, titulo: `A Moon Shaped Pool - Radiohead`, genero: `Rock`, precio: 5.499, stock: 5, cantidad: 0, imagen: `https://m.media-amazon.com/images/I/815bmGN5LML._SL1200_.jpg` },
    { id: 4, titulo: `In Rainbows - Radiohead`, genero: `Rock`, precio: 4.999, stock: 8, cantidad: 0, imagen: `https://canchageneral.com/wp-content/uploads/2017/10/rainbows.jpg` },
    { id: 5, titulo: `El Disko - Ca7riel`, genero: `HipHop`, precio: 5.499, stock: 11, cantidad: 0, imagen: `https://indiehoy.com/wp-content/uploads/2021/11/ca7riel.jpg` },
    { id: 6, titulo: `Circles - Mac Miller`, genero: `HipHop`, precio: 5.999, stock: 10, cantidad: 0, imagen: `https://www.tierraadentro.cultura.gob.mx/wp-content/uploads/2020/03/mc.jpg` },
    { id: 7, titulo: `The Great Escape - Volen Sentir`, genero: `Dance/Electrónica`, precio: 4.999, stock: 3, cantidad: 0, imagen: `https://geo-media.beatport.com/image_size/500x500/e5b013d5-9ef4-4ff8-8161-f478a622934c.jpg` },
    { id: 8, titulo: `Blue Train - John Coltrane`, genero: `Jazz/Blues`, precio: 4.299, stock: 0, cantidad: 0, imagen: `https://img.discogs.com/PCpyxXFcalQRvM5YIqdVQW4fDqo=/fit-in/596x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-401058-1362858539-5386.jpeg.jpg` },
    { id: 9, titulo: `Chet Baker Sings - Chet Baker`, genero: `Jazz/Blues`, precio: 4.499, stock: 3, cantidad: 0, imagen: `https://m.media-amazon.com/images/I/71UpKqnRc4L._SL1500_.jpg` },
    { id: 10, titulo: `Kind Of Blue - Miles Davis`, genero: `Jazz/Blues`, precio: 4.999, stock: 8, cantidad: 0, imagen: `https://img.discogs.com/RJ_QsSbpx73wuBSLxDCvkqS6AuQ=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-7303082-1605554072-3965.jpeg.jpg` },
    { id: 11, titulo: `Love Goes First - Maxi Degrassi`, genero: `Dance/Electrónica`, precio: 5.499, stock: 5, cantidad: 0, imagen: `https://i1.sndcdn.com/artworks-yqJE2UWXqQmtMaEx-h8yPyg-t500x500.jpg` },
    { id: 12, titulo: `Temporada De Reggaeton - Duki`, genero: `Latino`, precio: 5.799, stock: 10, cantidad: 0, imagen: `https://images.genius.com/bc9affe546b293350096f13ddff87eee.1000x1000x1.png` },
    { id: 13, titulo: `Planet Her - Doja Cat`, genero: `Pop`, precio: 4.999, stock: 0, cantidad: 0, imagen: `https://www.mondosonoro.com/wp-content/uploads/2021/06/doja-cat-planet-her-1.jpg` },
    { id: 14, titulo: `Future Nostalgia - Dua Lipa`, genero: `Pop`, precio: 5.999, stock: 10, cantidad: 0, imagen: `https://m.media-amazon.com/images/I/71VQFsqlPJL._SL1425_.jpg` },
]

//CARRITO//
const carrito = validarStorageCarrito()
function validarStorageCarrito() {
    if (localStorage.getItem(`carrito`) != null) {
        const storageCarrito = JSON.parse(localStorage.getItem(`carrito`));
        return storageCarrito
    }
    else {
        return []
    }
}

// agregar al carrito //
function AgregarAlCarrito(producto) {
    producto.cantidad = document.getElementById(`cantidad-${producto.id}`).value
    producto.precio = producto.precio * producto.cantidad
    const validarStock = producto.stock >= producto.cantidad
    if (validarStock) {
        carrito.push(producto)
        swal("¡El producto ya está en tu carrito!", "Échale un ojo al resto de nuestro catálogo ;)");
    } else {
        swal("Oops!", "Nos hemos quedado sin stock de este producto :(");
    }
    localStorage.setItem(`carrito`, JSON.stringify(carrito))
}
function textoCarrito(){
    let texto = `<h5>Tienes ${carrito.length} producto/s en el carrito</h5>`
    document.getElementById(`exampleModalLabel`).innerHTML = texto
}
// GENERAR CARRITO EN EL MODAL //
function mostrarProductosHTML(productos){
    document.getElementById(`carritoModal`).innerHTML = productos
}

function generarCarrito(productoAMostrar){
    let acumulador = "";
    productoAMostrar.forEach(elemento =>
        acumulador += `<div class="producto-carrito d-flex flex-row justify-content-between align-items-center mb-3">
        <img class="img-fluid" src="${elemento.imagen}" alt="fotoProducto">
        <h5 class="producto-carrito-titulo">${elemento.titulo}</h5>
        <h5>${elemento.cantidad}</h5>
        <h5>$${elemento.precio}</h5>
        <button type="button" class="btn-close"></button>
    </div>`)
    mostrarProductosHTML(acumulador)
}
//--------------------------------------//
document.getElementById(`cantidad-carrito`).innerHTML = carrito.length
textoCarrito()
generarCarrito(carrito)

