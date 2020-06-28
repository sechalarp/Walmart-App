import React, { Fragment, useEffect, useState } from 'react'
import NewValueDiscountApplied from '../logica/ModificaPrecio'
import './products.css'

export default function Products({ result, product }) {
    const [products, setProducts] = useState([])
    const [productsDiscounts, setProductsDiscounts] = useState([])
    const [wordFind, setWordFind] = useState('')

    useEffect(() => {
        if (typeof result !== 'undefined' && result.data != null) {
            setProducts(result)
            setWordFind(product)
            setProductsDiscounts(NewValueDiscountApplied(products))
        }
    }, [result, products, product])

    return (
        <Fragment>
            <div className='text-busqueda'>
                <h4 className='txt-products'>Resultados para: {wordFind}</h4>
            </div>
            <div>
                {productsDiscounts.length > 0 ? (
                    <div>
                        {productsDiscounts.map((item, index) => (
                            <div className="card" key={index}>
                                <img className='card-img' src={`http://${item.fotoProductoDTO}`} alt="producto-walmart" />
                                <div className="container">
                                    <div className='nombres-producto'>
                                        <b>{item.marcaProductoDTO}</b>&nbsp;{item.descripcionProductoDTO}
                                    </div>
                                    {result.isPalindromo ? (
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