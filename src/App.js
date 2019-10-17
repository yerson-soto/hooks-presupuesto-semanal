import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {

   const [ presupuesto, setPresupuesto ] = useState(0);
   const [ restante, setRestante] = useState(0);
   const [ preguntaStatus, setPregunta] = useState(true);
   const [ gasto, setGasto] = useState({});
   const [ gastos, setGastos] = useState([]);

   useEffect(() => {
         if (gasto.nombreGasto && gasto.cantidadGasto) {
            const listaGastos = [...gastos, gasto];
            setGastos(listaGastos);
         } 

         let presupuestoRestante = restante - gasto.cantidadGasto;
         setRestante(presupuestoRestante);

   }, [gasto]);

   const deleteExpense = (id) => {
      let copiaGastos = [...gastos];

      let newGastos = copiaGastos.filter(gasto => gasto.id !== id);

      setGastos(newGastos);
   }
   
   return (
      <header>
         <h1>Gasto Semanal</h1>

         <div className="contenido-principal contenido container">
            {
               preguntaStatus 
               ?
               <Pregunta 
                  setPresupuesto={setPresupuesto} 
                  setRestante={setRestante}
                  setPregunta={setPregunta} 
               /> 
               :
               (
                  <div className="row">
                     <div className="one-half column">
                        <Formulario 
                           setGasto={setGasto}
                        />
                     </div>

                     <div className="one-half column">
                        <Listado 
                           gastos={gastos}
                           deleteExpense={deleteExpense}
                        />

                        <ControlPresupuesto 
                           presupuesto={presupuesto}
                           restante={restante}
                        />
                     </div>
                  </div>
               )
            }
         </div>
      </header>
   );
}

export default App;
