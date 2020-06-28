let productDiscount = {
    idProductoDTO: 0,
    marcaProductoDTO: '',
    descripcionProductoDTO: '',
    fotoProductoDTO: '',
    valorProductoDTO: '',
    valorDescuentoProductoDTO: ''
}

export default function NewValueDiscountApplied(products) {
    let listProductsDiscount = []
    if (Object.entries(products).length !== 0) {
        let arreglo = products.data;
        let isPalindrome = products.isPalindrome

        for (var key in arreglo) {
            productDiscount = {
                idProductoDTO: arreglo[key].idProductoDTO,
                marcaProductoDTO: arreglo[key].marcaProductoDTO,
                descripcionProductoDTO: arreglo[key].descripcionProductoDTO,
                fotoProductoDTO: arreglo[key].fotoProductoDTO,
                valorProductoDTO: FormatToThousands(arreglo[key].valorProductoDTO),
                valorDescuentoProductoDTO: ApplyDiscount(isPalindrome, arreglo[key].valorProductoDTO)
            }
            listProductsDiscount.push(productDiscount)
        }
    }
    return listProductsDiscount;
}

function ApplyDiscount(isPalindrome, valueProduct) {
    return isPalindrome ? FormatToThousands(Math.round(valueProduct * 0.5)) : FormatToThousands(valueProduct)
}

function FormatToThousands(number) {
    return new Intl.NumberFormat("es-CL").format(number)
}