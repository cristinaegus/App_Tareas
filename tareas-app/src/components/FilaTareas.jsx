import React from "react";

const FilaTarea = ({ tarea, onBorrar, tareas }) => {
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

  // Contar tareas urgentes
  const contarTareasUrgentes = () => {
    return tareas.filter((t) => t.prioridad.toLowerCase() === "alta").length;
  };

  return (
<>
    <tr className={obtenerClasePrioridad(tarea.prioridad)}>
      <td>{tarea.texto}</td>
      <td>{tarea.prioridad}</td>
      <td>{tarea.momento || "No especificada"}</td>
      <td>
        <button onClick={() => onBorrar(tarea.id)}>Borrar</button>
      </td>
    </tr>

      {/* Renderizar mensaje si hay más de 3 tareas urgentes */}
      {contarTareasUrgentes() > 3 && (
        <tr>
          <td colSpan="4">
            <div className="alerta-tareas">
              Tienes demasiadas tareas pendientes
            </div>
          </td>
        </tr>
      )}
    </>
  );
};

export default FilaTarea;
