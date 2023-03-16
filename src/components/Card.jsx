import { useState } from "react";
import { CiTrash } from "react-icons/ci";
import {CiEdit} from "react-icons/ci"
import {CiSquareCheck} from "react-icons/ci"
import {BiRefresh} from "react-icons/bi"
import {BiCheckCircle} from 'react-icons/bi'

export const Card = ({tarea, setTareas, tareas}) => {

    const [ pendiente, setPendiente ] = useState(true);
    const [ edit, setEdit ] = useState(false);
    const [taskEdit, setTaskEdit ] = useState();

    const deleteTask = e =>{
        const newTasks = tareas.filter( tarea => tarea.id != e.target.id);
        setTareas(newTasks);
    }

    const editTask = (e) =>{
        if (e.target.classList.contains('editListo')) {
            tareas.map(tarea =>(
                tarea.task = taskEdit
            ))
        }
        setEdit(!edit);
    }

    const check = () =>{
        setPendiente(!pendiente)
    }
    return (
            <div className={`card ${pendiente ? "pendiente" : "hecho"}`}>
                {edit ? <input type="text"
                onChange={(e) => setTaskEdit(e.target.value)}></input> 
                : null}
                <p>{tarea.task}</p>
                <CiTrash
                    className="delete"
                    id={tarea.id}
                    onClick={deleteTask}/>
                { edit ?
                    <BiCheckCircle 
                        className="editListo"
                        onClick={editTask}/>
                : <CiEdit
                    className="edit"
                    id={tarea.id} 
                    onClick={editTask}
                    /> } 
                {pendiente ? <CiSquareCheck onClick={check}/>
                : <BiRefresh onClick={check}/>}
            </div>
     );
}
