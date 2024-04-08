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
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Agregar</button>
    </div>
  );
};

export default TodoForm;
