import "./App.css";
import AddToDo from "./Components/AddToDo";
// import { TodoProvider } from "./Store/todos";

function App() {
  return (
    <main>
      <h1>Click Todo React + TypeScript</h1>

      {/* <TodoProvider> */}
      <AddToDo />
      {/* </TodoProvider> */}

    </main>
  );
}

export default App;
