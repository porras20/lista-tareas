import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


export const Formulario = ({setTareas, tareas}) => {
   const [ tarea, setTarea ] = useState('');
   const [ error, setError ] = useState(false);

   const validarFormulario = e => {
      e.preventDefault()
      if (tarea.trim() === '') {
         setError(true)
         return
      }
      setError(false);
      setTareas([...tareas, {
         task: tarea,
         id: uuidv4(),
         estado: false
      }])
      setTarea('');
   }
    return ( 
        <>
           <h1>Lista de tareas</h1>
           {error ? 
            <div className="error" >
               La tarea esta en blanco
            </div>
            : null
           }
           <form action="" className="formulario" onSubmit={validarFormulario}>
                <input 
                  type="text" 
                  placeholder="Agrega una nueva tarea"
                  value={tarea} 
                  onChange={e => setTarea(e.target.value)}/>
                <button>Agregar Tarea</button>
           </form>
        </>
     );
}
 
