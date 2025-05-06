import React, { useState } from "react";
import FilaTarea from "./FilaTareas";

const Formulario = () => {
  const [tareas, setTareas] = useState([]);
  const [tarea, setTarea] = useState("");
  const [prioridad, setPrioridad] = useState("");
  const [momento, setMomento] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!tarea || !prioridad || !momento) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const nuevaTarea = {
      id: Date.now(),
      texto: tarea,
      prioridad,
      momento,
    };

    setTareas([...tareas, nuevaTarea]);
    setTarea("");
    setPrioridad("");
    setMomento("");
  };

  const handleBorrar = (id) => {
    setTareas(tareas.filter((t) => t.id !== id));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Introduce nueva tarea"
          value={tarea}
          onChange={(e) => setTarea(e.target.value)}
        />
        <select
          value={prioridad}
          onChange={(e) => setPrioridad(e.target.value)}
        >
          <option value="" disabled>
            Selecciona la prioridad
          </option>
          <option value="alta">Tarea Urgente</option>
          <option value="media">Tarea Media</option>
          <option value="baja">Tarea Baja</option>
        </select>
        <input
          type="datetime-local"
          value={momento}
          onChange={(e) => setMomento(e.target.value)}
        />
        <button type="submit">Añadir</button>
      </form>

      <h2>Lista de Tareas</h2>
      <table>
        <thead>
          <tr className="table-primary">
            <th colSpan="4">Tareas</th>
          </tr>
          <tr>
            <th>Tarea</th>
            <th>Prioridad</th>
            <th>Fecha</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {tareas.map((t) => (
            <FilaTarea key={t.id} tarea={t} onBorrar={handleBorrar} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Formulario;
