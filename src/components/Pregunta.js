import React, { Fragment, useState } from 'react';
import Error from './Error';

function Pregunta(props) {

    const { setPresupuesto, setPregunta, setRestante } = props;

    const [ cantidad, setCantidad ] = useState(0);
    const [ error, setError ] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (cantidad < 1 || isNaN(cantidad) || cantidad === null) {
            setError(true);
            return;
        }
        //si se pasa la validacion
        setError(false);
        setPresupuesto(cantidad);
        setRestante(cantidad);
        setPregunta(false);
        
    }
    
    return (
        <Fragment>
            <h2>Coloca tu presuspuesto</h2>

            {error ? <Error mensaje="El presupuesto es incorrecto!" /> : null}

            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Agrega tu presupuesto"
                    onChange={e => setCantidad(parseInt(e.target.value, 10)) }
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Aceptar"
                />
            </form>
        </Fragment>
    )
}

export default Pregunta;