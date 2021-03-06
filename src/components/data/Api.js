import axios from 'axios'

async function GetProducts(searchInput) {
    var searchUrl = 'http://localhost:8787/api/productos/obtenerproductos'
    const data = axios.get(searchUrl, { headers: { producto: searchInput } })
        .then(response => {
            return response.data;
        }).catch(function (error) {
            if (!error.status) {
                return Promise.reject(error)
            } else {
                error = console.log(error.response.data)
            }
        });
    return data;
};

export default GetProducts;