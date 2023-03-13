import { Card } from "./Card";

export const Tareas = ({tareas}) => {
    return (
        <div className="tareas">
            {tareas.map(tarea =>(
                <Card tarea={tarea} key={tarea.id} />
            ))}
        </div>
     );
}
 
