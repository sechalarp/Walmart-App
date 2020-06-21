import axios from 'axios'

async function GetProductos(searchInput) {
    var searchUrl = 'https://localhost:44325/api/productos/obtenerproductos'
    const data = axios.get(searchUrl, { headers: { producto: searchInput } })
        .then(response => {
            return response.data;
        }).catch(error => { console.log(error.response.data) });
    return data;
};

export default GetProductos;