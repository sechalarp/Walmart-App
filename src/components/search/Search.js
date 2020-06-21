import React, { Fragment, useState } from 'react'

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
                <h4>Servicio al cliente de Lider.cl: Whatsapp +56957211492 | Horario: de lunes a viernes de 8:00 a 22:00 y sábado, domingo y festivos de 9:00 a 22:00</h4>
            </div>
            <div className="buscador">
                <input name="buscador" type="text" onChange={e => handleOnChange(e)} value={palabra} onKeyDown={handleKeyDown} />
            </div>
        </Fragment>
    )
}