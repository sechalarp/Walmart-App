export function InputSearch(palabra) {
    let resultado = true
    if (isNaN(palabra) && palabra.length < 4)
        resultado = false
    if ((Number.isInteger(palabra)) || !palabra)
        resultado = false
    return resultado
}