import React from 'react';

const Gasto = ({gasto, deleteExpense}) => {

    const handleClick = (id) => {
        deleteExpense(id);
    }

    return (  
        <li className="gastos">
            <p>
                {gasto.nombreGasto}
                <span className="gasto">$ {gasto.cantidadGasto}</span>
                <input 
                    type="submit" 
                    className="button-primary"
                    onClick={() => handleClick(gasto.id)}
                    value="x"
                />
            </p>
        </li>
    );
}
 
export default Gasto;
