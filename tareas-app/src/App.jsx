import { useState } from "react";
import Formulario from "./components/Formulario";
import "./App.css";

function App() {
  const [tareas] = useState(["texto tarea1", "texto tarea 2"]);

  return (
    <>
      <div className="container">
        <h1>Gestor de tareas</h1>
        <Formulario />
        <h2>Tareas pendientes</h2>
        <ul>
          {tareas.map((tarea, index) => (
            <li key={index}>{tarea}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
