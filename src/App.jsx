// Import el contexto, El formulario y la lista de tareas
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div>
      <h1 style={{ fontFamily: "Arial" }}>Aplicación de Lista de Tareas</h1>
      {/* Renderiza el formulario de tareas y la lista*/}
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default App;
