import "./App.css";
import AddToDo from "./Components/AddToDo";
import Todos from "./Components/Todos";
import Navbar from "./Components/Navbar";
// import { TodoProvider } from "./Store/todos";

function App() {
  return (
    <main>
      <h1>Click Todo React + TypeScript</h1>
      <Navbar />
      {/* <TodoProvider> */}
      <AddToDo />
      {/* </TodoProvider> */}
          <Todos/>
          
    </main>
  );
}

export default App;
