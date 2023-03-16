import { Card } from "./Card";

export const Tareas = ({tareas, setTareas}) => {
    return (
        <div className="tareas">
            {tareas.map(tarea =>(
                <Card 
                    tarea={tarea} 
                    setTareas={setTareas} 
                    tareas={tareas} 
                    key={tarea.id} />
            ))}
        </div>
     );
}
 
