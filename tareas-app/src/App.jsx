import { useState } from "react";
import Formulario from "./components/Formulario";
import TablaTareas from "./components/TablaTareas";
import "./App.css";

function App() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (nuevaTarea) => {
    setTareas([...tareas, { ...nuevaTarea, id: Date.now() }]);
  };

  return (
    <>
      <div className="container">
        <h1>Gestor de tareas</h1>
        <Formulario onAgregarTareas={agregarTarea} />
        <h2>Tareas pendientes</h2>
        <TablaTareas tareas={tareas} />
      </div>
    </>
  );
}

export default App;
