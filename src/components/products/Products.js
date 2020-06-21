import React, { Fragment, useEffect, useState } from 'react'

export default function Products({ resultado }) {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        if (resultado != null) {
            setProductos(resultado)
            // console.log('productos', productos)
        }
    }, [resultado])

    return (
        <Fragment>
            <h1>Resultados</h1>
            <div>
                {productos ? (
                    <div>
                        {/* {console.log('forEach', productos)} */}
                        {productos.map((item, index) => (
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