import React, { Fragment, useEffect, useState } from 'react'
import NuevoValorDescuentoAplicado from '../logica/ModificaPrecio'
import './products.css'

export default function Products({ resultado, producto }) {
    const [productos, setProductos] = useState([])
    const [productosDescuentos, setProductosDescuentos] = useState([])
    const [palabraBusqueda, setPalabraBusqueda] = useState('')

    useEffect(() => {
        if (typeof resultado !== 'undefined' && resultado.data != null) {
            setProductos(resultado)
            setPalabraBusqueda(producto)
            setProductosDescuentos(NuevoValorDescuentoAplicado(productos))
        }
    }, [resultado, productos])

    return (
        <Fragment>
            <div className='text-busqueda'>
                <h4 className='txt-products'>Resultados para: {palabraBusqueda}</h4>
            </div>
            <div>
                {/* {console.log(productosDescuentos)} */}
                {productosDescuentos.length > 0 ? (
                    <div>
                        {productosDescuentos.map((item, index) => (
                            <div className="card" key={index}>
                                <img className='card-img' src={`http://${item.fotoProductoDTO}`} alt="producto-walmart" />
                                <div className="container">
                                    <div className='nombres-producto'>
                                        <b>{item.marcaProductoDTO}</b>&nbsp;{item.descripcionProductoDTO}
                                    </div>
                                    {resultado.isPalindromo ? (
                                        <div className='valores-producto'>
                                            <b>${item.valorDescuentoProductoDTO}</b>
                                            <label className='valor-descto'>50%</label><br />
                                            <label className='valor-producto'><del>${item.valorProductoDTO}</del></label>
                                        </div>
                                    ) : (
                                            <div>
                                                <label><b>${item.valorProductoDTO}</b></label>
                                            </div>)}
                                    <div className='categorias'>
                                        <div className='btn-despacho'>
                                            despacho
                                        </div>
                                        <div className='btn-retro'>
                                            retro
                                        </div>
                                    </div>
                                    <div className='btn-agregar'>
                                        Agregar
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                        <p className='txt-products'>No se han encontrado productos</p>
                    )}
            </div>
        </Fragment>
    )
}