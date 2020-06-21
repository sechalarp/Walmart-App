import React, { Fragment, useState } from 'react'
import axios from 'axios'

export default function Search() {
    const [producto, setProducto] = useState('');
    const [resultado, setResultado] = useState([]);

    const handleOnChange = event => {
        setProducto(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            getProductos(producto);
        }
    }

    async function getProductos(searchInput) {
        var searchUrl = 'https://localhost:44325/api/productos/obtenerproductos'
        const data = await axios.get(searchUrl, { headers: { producto: searchInput } })
            .then(response => {
                setResultado(response.data.data)
            });
        return data;
    };

    return (
        <Fragment>
            <div className="info-contacto">
                <h4>Servicio al cliente de Lider.cl: Whatsapp +56957211492 | Horario: de lunes a viernes de 8:00 a 22:00 y sábado, domingo y festivos de 9:00 a 22:00</h4>
            </div>
            <div className="buscador">
                <input name="buscador" type="text" onChange={e => handleOnChange(e)} value={producto} onKeyDown={handleKeyDown} />
            </div>
            <div>
                {resultado ? (
                    <div>
                        {resultado.map((item, index) => (
                            <div key={index}>
                                <h1>{item.marcaProductoDTO}</h1>
                                <label>{item.descripcionProductoDTO}</label>
                                <img src={`http://${item.fotoProductoDTO}`} alt="producto-walmart" />
                                ${item.valorProductoDTO}
                            </div>
                        ))}
                    </div>
                ) : (
                        <p>No se han encontrado productos</p>
                    )}
            </div>
        </Fragment>
    )
}