import React, { useState } from "react";

const Formulario = () => {
  const [tareas, setTareas] = useState([]); // Estado para almacenar las tareas
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
      tarea,
      prioridad,
      momento,
    };

    setTareas([...tareas, nuevaTarea]); // Agregar la nueva tarea al estado
    setTarea(""); // Limpiar el campo de texto
    setPrioridad(""); // Limpiar el selector
    setMomento(""); // Limpiar el campo de fecha
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="tarea_nueva"></label>
        <input
          type="text"
          id="tarea_nueva"
          maxLength="40"
          placeholder="Introduce nueva tarea"
          value={tarea}
          onChange={(e) => setTarea(e.target.value)} // Actualizar el estado de la tarea
        />
        <select
          name="prioridad"
          id="selector_prioridades"
          value={prioridad}
          onChange={(e) => setPrioridad(e.target.value)} // Actualizar el estado de la prioridad
        >
          <option value="" disabled>
            Selecciona la prioridad
          </option>
          <option value="muy_baja">Tarea poco importante</option>
          <option value="baja">Tarea Normal</option>
          <option value="media">Tarea Importante</option>
          <option value="alta">Tarea Urgente</option>
        </select>
        <input
          type="datetime-local"
          id="momento"
          value={momento}
          onChange={(e) => setMomento(e.target.value)} // Actualizar el estado de la fecha
        />
        <button type="submit" id="aniadir_tarea">
          Añadir
        </button>
      </form>

      {/* Renderizar las tareas en una tabla */}
      <h2>Lista de Tareas</h2>
      <table>
        <thead>
          <tr>
            <th>Tarea</th>
            <th>Prioridad</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {tareas.map((t) => (
            <tr key={t.id}>
              <td>{t.tarea}</td>
              <td>{t.prioridad}</td>
              <td>{t.momento}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Formulario;
