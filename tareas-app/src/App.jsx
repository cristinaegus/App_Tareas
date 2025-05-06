import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import TablaTareas from "./components/TablaTareas";
import "./estilos/App.css";

function App() {
  const [tareas, setTareas] = useState(() => {
    // Recuperar tareas desde localStorage al cargar la página
    const tareasGuardadas = localStorage.getItem("tareas");
    return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
  });

  const agregarTarea = (nuevaTarea) => {
    setTareas([...tareas, { ...nuevaTarea, id: Date.now() }]);
  };

  const borrarTarea = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };

  // Guardar tareas en localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

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
