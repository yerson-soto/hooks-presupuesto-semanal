import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';

function Formulario (props) {

    const [ nombreGasto, setNombreGasto ] = useState('');
    const [ cantidadGasto, setCantidadGasto ] = useState(0);
    const [ error, setError] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();

        if (cantidadGasto < 1 || isNaN(cantidadGasto) || nombreGasto === '' || /\s+$/.test(nombreGasto)) {
            //colocar true el error
            setError(true);
            return;
        }

        //crear objeto
        const gasto = {
            nombreGasto, 
            cantidadGasto,
            id: shortid.generate()
        }

        props.setGasto(gasto);

        //eliminar alerta
        setError(false);

        //resetear el state y el formulario
        setNombreGasto('');
        setCantidadGasto('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Agrega tus gasto aquí</h2>

            {error ? <Error mensaje="Ambos campos son obligatorios" /> : null}

            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    onChange={e => setNombreGasto(e.target.value)}
                    value={nombreGasto}
                />
            </div>
            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    onChange={e => setCantidadGasto(e.target.value)}
                    value={cantidadGasto}
                />
            </div>

            <input type="submit" className="button-primary u-full-width" value="Agregar gasto" />
        </form>
    )
}

export default Formulario;