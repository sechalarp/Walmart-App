import React, { Fragment, useState } from 'react'
import logo from '../../logo.svg';
import menuIcon from '../../menuIcon512.png';
import { InputSearch } from './ValidateSearch';
import './search.css'

export default function Search(props) {
    const [word, setWord] = useState('');

    const handleOnChange = event => {
        setWord(event.target.value);
    };

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            if (!InputSearch(word))
                return
            props.onChange(word)
        }
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
                    &nbsp;Categorías
                </div>
                <div className='input-buscador'>
                    <input className='buscador' name="buscador" type="text" onChange={e => handleOnChange(e)} value={word} onKeyDown={handleKeyDown} autoComplete='off' maxLength='50' placeholder='  ¿Qué estás buscando?' />
                </div>
                <div className='btn-carro'>
                    <img className='img-align' width="20" src="https://www.lider.cl/catalogo/images/lider-cart.svg" name='liderCart-icon' alt='liderCart-icon' />
                    &nbsp;Carro
                </div>
                <div className='btn-supermercado'>
                    <img className='img-align' width="20" src="https://www.lider.cl/catalogo/images/marketIcon.svg" name='market-icon' alt='market-icon' />
                    &nbsp;Supermercado
                </div>
            </div>
        </Fragment>
    )
}