// Importo hook y contexto
import { useEffect } from "react";
import { useTodoList } from "../context/TodoListContext";

// Componente de la lista de tareas
const TodoList = () => {
  // Obtiene la lista de tareas y la función para actualizarla desde el contexto
  const { todos, setTodos } = useTodoList();

  // Efecto para imprimir la lista de tareas cada vez que cambia
  useEffect(() => {
    console.log("Lista de tareas actualizada:", todos);
  }, [todos]);

  // Función para eliminar una tarea
  const removeTodo = (TodoRemove) => {
    setTodos((todos) => todos.filter((_, index) => index !== TodoRemove));
  };

  // Retorna cada tarea en la lista
  return (
    <ul>
      {todos.map((todo, index) => (
        <li
          key={index}
          style={{
            listStyle: "none",
            marginBottom: "5px",
          }}
        >
          <span style={{ marginLeft: "20px", fontSize: "20" }}>{todo}</span>
          <button
            onClick={() => removeTodo(index)}
            style={{
              marginLeft: "20px",
              padding: "10px 0 10px 0",
              backgroundColor: "#dc3545",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            Eliminar
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
