import React, { Fragment, useState } from 'react'
import logo from '../../logo.svg';
import menuIcon from '../../menuIcon512.png';
import './search.css'

export default function Search(props) {
    const [palabra, setPalabra] = useState('');

    const handleOnChange = event => {
        setPalabra(event.target.value);
    };

    function handleKeyDown(event) {
        if (event.key === 'Enter')
            props.onChange(palabra)
    }

    return (
        <Fragment>
            <div className="info-contacto">
                Servicio al cliente de Lider.cl: Whatsapp +56957211492 | Horario: de lunes a viernes de 8:00 a 22:00 y sábado, domingo y festivos de 9:00 a 22:00
            </div>
            <div className="banner-buscador">
                <div className='logo-app'>
                    <img src={logo} className='logo' name='logo-lider-walmart' alt='logo-lider-walmart' />
                </div>
                <div className='btn-categorias'>
                    <img src={menuIcon} className='menuIcon' name='menuIcon' alt='menuIcon' />
                    Categorías
                </div>
                <input className='buscador' name="buscador" type="text" onChange={e => handleOnChange(e)} value={palabra} onKeyDown={handleKeyDown} autoComplete='off' placeholder='  ¿Qué estás buscando?' />
                <div className='btn-carro'>
                    <img alt="liderCart-icon" width="20" src="https://www.lider.cl/catalogo/images/lider-cart.svg" name='liderCart-icon' alt='liderCart-icon' />
                    Carro
                </div>
                <div className='btn-supermercado'>
                    <img alt="market-icon" width="20" src="https://www.lider.cl/catalogo/images/marketIcon.svg" name='market-icon' alt='market-icon' />
                    Supermercado
                </div>
            </div>
        </Fragment>
    )
}