import React from "react";
import FilaTarea from "./FilaTareas";

const TablaTareas = ({ tareas, onBorrarTarea }) => {
  return (
    <table>
      <tbody>
        {tareas.map((tarea) => (
          <FilaTarea key={tarea.id} tarea={tarea} onBorrar={onBorrarTarea} />
        ))}
      </tbody>
    </table>
  );
};

export default TablaTareas;
