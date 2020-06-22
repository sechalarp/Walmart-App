let productoDescuento = {
    idProductoDTO: 0,
    marcaProductoDTO: '',
    descripcionProductoDTO: '',
    fotoProductoDTO: '',
    valorProductoDTO: '',
    valorDescuentoProductoDTO: ''
}

export default function NuevoValorDescuentoAplicado(productos) {
    let listaProductosDescuentos = []
    if (Object.entries(productos).length !== 0) {
        let arreglo = productos.data;
        let isPalindromo = productos.isPalindromo

        for (var key in arreglo) {
            productoDescuento = {
                idProductoDTO: arreglo[key].idProductoDTO,
                marcaProductoDTO: arreglo[key].marcaProductoDTO,
                descripcionProductoDTO: arreglo[key].descripcionProductoDTO,
                fotoProductoDTO: arreglo[key].fotoProductoDTO,
                valorProductoDTO: FormatearAMiles(arreglo[key].valorProductoDTO),
                valorDescuentoProductoDTO: AplicarDescuento(isPalindromo, arreglo[key].valorProductoDTO)
            }
            listaProductosDescuentos.push(productoDescuento)
        }
    }
    return listaProductosDescuentos;
}

export function AplicarDescuento(isPalindromo, valorProducto) {
    return isPalindromo ? FormatearAMiles(Math.round(valorProducto * 0.5)) : FormatearAMiles(valorProducto)
}

export function FormatearAMiles(number) {
    return new Intl.NumberFormat("es-CL").format(number)
}