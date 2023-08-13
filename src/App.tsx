import "./index.css";
import AddToDo from "./Components/AddToDo";
import Todos from "./Components/Todos";
import Navbar from "./Components/Navbar";
import TimeClock from "./Components/Clock/Time";
// import { TodoProvider } from "./Store/todos";

function App() {
  return (
    <> 
     <div id="Clock_component">
          <TimeClock  /> </div>
    <main id="main">
      <h2  id="heading">Click Todo React + TypeScript</h2>
      <div id="components">   
      <Navbar />
      {/* <TodoProvider> */}
      <AddToDo />
      {/* </TodoProvider> */}
          <Todos/>
          </div>
    </main>
   
         
          </>
  );
}

export default App;
