import React from 'react';
import Gasto from './Gasto';

function Listado ({gastos, deleteExpense}) {
    return (
        <div className="gastos-realizados">
            <h2>Listado</h2>
            {gastos.map(gasto => (
                <Gasto 
                    key={gasto.id}
                    gasto={gasto}
                    deleteExpense={deleteExpense}
                />
            ))}
        </div>
    )
}

export default Listado;