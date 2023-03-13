import { useState } from 'react'
import './App.css'
import { Formulario } from './components/Formulario'
import { Tareas } from './components/Tareas'

function App() {
  const [tareas, setTareas] = useState([]);
  return (
    <div className="container">
      <Formulario tareas={tareas} setTareas={setTareas} />
      <Tareas tareas={tareas} />
    </div>
  )
}

export default App
