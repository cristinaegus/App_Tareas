import React from "react";

const FilaTarea = ({ tarea, onBorrar }) => {
  // Determinar la clase CSS según la prioridad
  const obtenerClasePrioridad = (prioridad) => {
    switch (prioridad) {
      case "alta":
        return "prioridad-alta";
      case "media":
        return "prioridad-media";
      case "baja":
        return "prioridad-baja";
      default:
        return "";
    }
  };

  return (
    <tr className={obtenerClasePrioridad(tarea.prioridad)}>
      <td>{tarea.texto}</td>
      <td>{tarea.prioridad}</td>
      <td>{tarea.momento || "No especificada"}</td>
      <td>
        <button onClick={() => onBorrar(tarea.id)}>Borrar</button>
      </td>
    </tr>
  );
};

export default FilaTarea;
