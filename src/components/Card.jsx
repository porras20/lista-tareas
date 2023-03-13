import { CiTrash } from "react-icons/ci";
import {CiEdit} from "react-icons/ci"
import {CiSquareCheck} from "react-icons/ci"

export const Card = ({tarea}) => {

    const deleteTask = () =>{
        
    }
    return (
            <div className="card">
                <p>{tarea.task}</p>
                <CiTrash className="delete" id={tarea.id} onClick={deleteTask}/>
                <CiEdit className="edit" id={tarea.id}/>
                <CiSquareCheck className="check"/>
            </div>
     );
}
 