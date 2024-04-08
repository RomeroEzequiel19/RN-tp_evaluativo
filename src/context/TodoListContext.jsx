// importamos hooks y funciones
import { useState, createContext, useEffect, useContext } from "react";

// Creamos el contexto
const TodoListContext = createContext(null);

// Define el proveedor de la lista de tareas
export const TodoListProvider = ({ children }) => {
  // Estado para almacenar la lista de tareas
  const [todos, setTodos] = useState([]);

  // Efecto para cargar las tareas desde el almacenamiento local al cargar la página
  useEffect(() => {
    const almacenarTodos = JSON.parse(localStorage.getItem("todoList"));
    if (almacenarTodos) {
      setTodos(almacenarTodos);
    }
  }, []);

  // Efecto para guardar las tareas en el almacenamiento local cada vez que cambian
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todos));
  }, [todos]);

  return (
    // Proporciona el contexto de la lista de tareas a los componentes dentro de él
    <TodoListContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoListContext.Provider>
  );
};

export const useTodoList = () => {
  const context = useContext(TodoListContext);
  if (!context) {
    throw new Error(
      "useTodoList debe ser utilizado dentro de un TodoListProvider"
    );
  }
  return context;
};
