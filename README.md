# Integración de Lista de Tareas en una Aplicación React

### Este es un ejemplo de cómo integrar una lista de tareas en una aplicación React utilizando componentes y un proveedor de contexto.

## Pasos para la Integración

Sigue estos pasos para integrar la lista de tareas en tu aplicación React:

### 1. Clona el Repositorio

Primero, clona el repositorio que contiene los archivos de la lista de tareas:

```
git clone <URL_DEL_REPOSITORIO>
```

### 2. Instala las Dependencias

Ejecuta el siguiente comando para instalar las dependencias necesarias:

```
npm install
```

### 3. Correr el servidor

Ejecuta el siguiente comando para correr el servidor:

```
pnpm run dev
```

### 4. Manera de Intregrar los Hooks

Para empezar, cuento con el siguiente contexto y componentes:

- App.jsx: Este es el punto de entrada principal de la aplicación. Es donde se integran los componentes TodoForm y TodoList dentro del proveedor TodoListProvider.

- TodoForm.jsx: Este componente renderiza un formulario para agregar nuevas tareas a la lista.

- TodoList.jsx: Este componente renderiza la lista de tareas y proporciona funcionalidad para eliminar tareas.

- TodoListProvider.jsx: Este componente define un proveedor de contexto que proporciona el estado de la lista de tareas a los componentes hijos.

- "useContext": Este hook se utiliza para acceder al contexto que creé con `createContext`. En mi caso, tengo un contexto llamado "TodoListContext" que provee el estado y funciones para manipular la lista de tareas. En el componente "TodoForm" y "TodoList", se utiliza el contexto para obtener acceso a "todos" (la lista de tareas) y "setTodos" (la función para actualizar la lista de tareas). Además, dentro del contexto, encierro mi aplicación, que en este caso se llama "App", para que los componentes puedan usar la información que les provee

- "useState": Este hook se utiliza para añadir estado a un componente funcional en React. En mi código, lo utilizo en el componente "TodoForm" para manejar el estado de "newTodo", que representa el valor del nuevo elemento que se va a agregar a la lista de tareas. Con "setNewTodo" puedo actualizar este estado cuando el usuario escribe en el campo de entrada. También utilizo useState para crear la lista de tareas(todos) y la función para modificar esa lista(setTodos), los cuales pueden ser utilizados por los componentes "TodoForm" y "TodoList" gracias al contexto

- "useEffect": Este hook se utiliza para realizar efectos secundarios en componentes funcionales. En mi código, utilizo "useEffect" en el componente "TodoList" para imprimir la lista de tareas cada vez que cambia ("todos") que es mi lista de tareas. También lo utilizo en el contexto "TodoListProvider" para cargar las tareas desde el almacenamiento local al cargar la página y para guardarlas en el almacenamiento local cada vez que cambian.
