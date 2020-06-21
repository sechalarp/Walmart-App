import axios from 'axios'

async function getProductos(searchInput) {
    var searchUrl = 'https://localhost:44325/api/productos/obtenerproductos'
    const data = axios.get(searchUrl, { headers: { producto: searchInput } })
        .then(response => {
            // console.log('response', response)
            return response.data.data;
        });
    return data;
};

export default getProductos;