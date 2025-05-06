import { useState } from "react";
import Formulario from "./components/Formulario";
import TablaTareas from "./components/TablaTareas";
import "./estilos/App.css";

function App() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (nuevaTarea) => {
    setTareas([...tareas, { ...nuevaTarea, id: Date.now() }]);
  };
  const borrarTarea = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };

  return (
    <>
      <div className="container">
        <h1>Gestor de tareas</h1>
        <Formulario onAgregarTareas={agregarTarea} />

        <TablaTareas tareas={tareas} onBorrarTarea={borrarTarea} />
      </div>
    </>
  );
}

export default App;
