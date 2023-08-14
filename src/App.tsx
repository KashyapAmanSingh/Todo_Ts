import "./index.css";
import AddToDo from "./Components/AddToDo";
import Todos from "./Components/Todos";

import Navbar from "./Components/Navbar";
import TimeClock from "./Components/Clock/Time";


import FooterVideo from "./Components/Footer/FooterVideo";
function App() {
  return (
    <>
      <div id="Clock_component">
        <TimeClock />{" "}
      </div>
      <main id="main">
        <h2 id="heading">Click Todo React + TypeScript</h2>
        <div id="components">
          <Navbar />
          <AddToDo />
          <Todos />
        </div>
      </main>
      <FooterVideo/>
    </>
  );
}

export default App;
