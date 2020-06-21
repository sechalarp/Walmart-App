import React, { Fragment, useEffect, useState } from 'react'
import NuevoValorDescuentoAplicado from '../logica/ModificaPrecio'
import './products.css'

export default function Products({ resultado }) {
    const [productos, setProductos] = useState([])
    const [productosDescuentos, setProductosDescuentos] = useState([])

    useEffect(() => {
        if (typeof resultado !== 'undefined' && resultado.data != null) {
            // console.log('resultado', resultado)
            setProductos(resultado)
            // console.log('productos', productos)
            setProductosDescuentos(NuevoValorDescuentoAplicado(productos))
        }
    }, [resultado, productos])

    return (
        <Fragment>
            <h1>Resultados</h1>
            <div>
                {/* {console.log(productosDescuentos)} */}
                {productosDescuentos.length > 0 ? (
                    <div>
                        {productosDescuentos.map((item, index) => (
                            <div key={index}>
                                <h1>{item.marcaProductoDTO}</h1>
                                <label>{item.descripcionProductoDTO}</label>
                                <img src={`http://${item.fotoProductoDTO}`} alt="producto-walmart" />
                                ${item.valorProductoDTO}
                                ${item.valorDescuentoProductoDTO}
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