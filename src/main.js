function AgregarAlCarrito(nombreDelProducto , precio , cantidadStock ){
    let cantidadPedida = Number(prompt(`¿Qué cantidad desea comprar?`))
    const total = precio * cantidadPedida
    const validarStock = (cantidadStock >= cantidadPedida)
        if (validarStock){
        console.log(`Agregaste al carrito ${cantidadPedida} ${nombreDelProducto} a $${total}`)
        alert(`¡Gracias por comprar en Rekord House!`)
        } else{
            console.log(`No hay suficiente stock de este producto`)
        }
}
function MasProductos (){
    let eleccionDeProducto = prompt(`También podria interesarle: \n 1) Swimming - Mac Miller \n 2)Blonde - Frank Ocean \n 3) El Disko - Ca7riel \n Ingrese el número del producto que desea comprar, para salir, ingrese 0`)
    do{
        switch (eleccionDeProducto){
            case "1":
                AgregarAlCarrito("Swimming - Mac Miller" , 5.499 , 5)
                break;
            case "2":
                AgregarAlCarrito("Blonde - Frank Ocean" , 4.499 , 0)
                break;
            case "3":
                AgregarAlCarrito("El Disko - Ca7riel" , 5.499 , 11)
                break;
            case "0":
                break;
            default:
                alert(`El valor ingresado no es válido`)
                eleccionDeProducto = prompt(`También podria interesarle: \n 1) Swimming - Mac Miller \n 2)Blonde - Frank Ocean \n 3) El Disko - Ca7riel \n Ingrese el número del producto que desea comprar, para salir, ingrese 0`) 
        }
    }while ((eleccionDeProducto < 0) || (eleccionDeProducto > 3))
}

//Tobías De Cancellis
