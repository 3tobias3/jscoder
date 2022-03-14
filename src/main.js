function MasProductos (){
    let eleccionDeProducto = prompt(`También podria interesarle: \n 1) Swimming - Mac Miller \n 2)Blonde - Frank Ocean \n 3) El Disko - Ca7riel \n Ingrese el número del producto que desea comprar, para salir, ingrese 0`)
    do{
        switch (eleccionDeProducto){
            case "1":
                producto3.agregarAlCarrito(producto3)
                break;
            case "2":
                producto2.agregarAlCarrito(producto2)
                break;
            case "3":
                producto6.agregarAlCarrito(producto6)
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

const carrito = []

class producto {
    constructor(nombre , genero , precio , stock , cantidadPedida){
        this.nombre = nombre
        this.genero = genero
        this.precio = precio 
        this.stock = stock
        this.cantidadPedida = cantidadPedida
    }
    agregarAlCarrito (producto){
        this.cantidadPedida = Number(prompt(`¿Qué cantidad desea comprar?`))
        this.precio = this.precio * this.cantidadPedida
        const validarStock = (this.stock >= this.cantidadPedida)
        if (validarStock){
            carrito.push(producto)
        }else{
            console.log(`No hay suficiente stock`)
        }
    }
}

const producto1 = new producto (`Beerbongs & Bentleys - Post Malone` , `HipHop` , 4.999 , 10 , 0)
const producto2 = new producto (`Blonde - Frank Ocean` , `HipHop` , 4.499 , 0 , 0)
const producto3 = new producto (`Swimming - Mac Miller` , `HipHop` , 5.499 , 5 , 0)
const producto4 = new producto (`A Moon Shaped Pool - Radiohead` , `Rock Alternativo` , 5.499 , 5 , 0)
const producto5 = new producto (`In Rainbows - Radiohead` , `Rock Alternativo` , 4.999 , 8 , 0)
const producto6 = new producto (`El Disko - Ca7riel` , `HipHop` , 5.499 , 11 , 0)





