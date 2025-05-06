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

  // Función para calcular el tiempo restante
  const calcularTiempoRestante = (momento) => {
    const fechaTarea = new Date(momento);
    const fechaActual = new Date();
    const diferencia = fechaTarea - fechaActual;

    if (diferencia <= 0) {
      return "La tarea ya venció.";
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor(
      (diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));

    return `${dias} días, ${horas} horas y ${minutos} minutos restantes.`;
  };

  // Función para manejar el evento onMouseOver
  const handleMouseOver = () => {
    if (tarea.momento) {
      alert(calcularTiempoRestante(tarea.momento));
    } else {
      alert("No se especificó una fecha para esta tarea.");
    }
  };

  return (
    <tr
      className={obtenerClasePrioridad(tarea.prioridad)}
      onMouseOver={handleMouseOver} // Asignar la función al evento onMouseOver
    >
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
