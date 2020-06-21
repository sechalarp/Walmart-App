let productoDescuento = {
    idProductoDTO: 0,
    marcaProductoDTO: '',
    descripcionProductoDTO: '',
    fotoProductoDTO: '',
    valorProductoDTO: 0,
    valorDescuentoProductoDTO: 0
}

export default function NuevoValorDescuentoAplicado(productos) {
    let listaProductosDescuentos = []
    if (Object.entries(productos).length !== 0) {
        let arreglo = productos.data;
        let isPalindromo = productos.isPalindromo

        // console.log('Inicio ModificaPrecio: ', productos.data)
        // console.log('modificaPrecio: ', arreglo)
        for (var key in arreglo) {
            productoDescuento = {
                idProductoDTO: arreglo[key].idProductoDTO,
                marcaProductoDTO: arreglo[key].marcaProductoDTO,
                descripcionProductoDTO: arreglo[key].descripcionProductoDTO,
                fotoProductoDTO: arreglo[key].fotoProductoDTO,
                valorProductoDTO: arreglo[key].valorProductoDTO,
                valorDescuentoProductoDTO: AplicarDescuento(isPalindromo, arreglo[key].valorProductoDTO)
            }
            listaProductosDescuentos.push(productoDescuento)
        }
    }
    // console.log('listaProductosDescuentos: ',listaProductosDescuentos)
    return listaProductosDescuentos;
}

let AplicarDescuento = (isPalindromo, valorProducto) => {
    return isPalindromo ? Math.round(valorProducto * 0.5) : valorProducto
}