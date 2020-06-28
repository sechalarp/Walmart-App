export function InputSearch(palabra) {
    let result = true
    if (isNaN(palabra) && palabra.length < 4)
        result = false
    if ((Number.isInteger(palabra)) || !palabra)
        result = false
    return result
}