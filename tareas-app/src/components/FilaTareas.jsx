import React from "react";

const FilaTarea = ({ tarea, onBorrar }) => {
  return (
    <tr>
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
