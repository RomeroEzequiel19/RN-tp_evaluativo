// Importación de hooks y contexto
import { useState } from "react";
import { useTodoList } from "../context/TodoListContext";

// Componente para el formulario de tareas
const TodoForm = () => {
  // Obtiene la función para actualizar la lista de tareas desde el contexto
  const { setTodos } = useTodoList();

  // Estado para almacenar el valor del nuevo elemento de la lista de tareas
  const [newTodo, setNewTodo] = useState("");

  // Función para agregar una nueva tarea
  const addTodo = () => {
    if (newTodo.trim() === "") return;

    // Agrega la nueva tarea a la lista de tareas
    setTodos((todos) => [...todos, newTodo]);
    setNewTodo(""); // Reinicia el campo de entrada
  };

  // Retorna un formulario para agregar tareas
  return (
    <div
      style={{
        display: "flex",
        marginBottom: "10px",
        justifyContent: "center",
        width: "50%",
      }}
    >
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        style={{
          marginRight: "10px",
          padding: "5px",
          borderRadius: "4px",
          border: "1px solid #ccc",
          fontSize: "16px",
          flexGrow: "1",
        }}
      />
      <button
        onClick={addTodo}
        style={{
          padding: "5px 10px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Agregar
      </button>
    </div>
  );
};

export default TodoForm;
