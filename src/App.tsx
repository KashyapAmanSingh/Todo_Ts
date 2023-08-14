import "./index.css";
import AddToDo from "./Components/AddToDo";
import Todos from "./Components/Todos";

import Navbar from "./Components/Navbar";
import TimeClock from "./Components/Clock/Time";


import FooterVideo from "./Components/Footer/FooterVideo";
import Mousescrol from "./Components/Mouse/MouseAnim";
function App() {
  return (
    <>
      <div id="Clock_component">
        <TimeClock />{" "}
      </div>
      <main id="main">
        <h2 id="heading">Conquer To-Do List: Master Productivity</h2>
        <div id="components">
          <Navbar />
          <AddToDo />
          <Todos />
        </div>
        <Mousescrol/>
      </main>
      <FooterVideo/>
    </>
  );
}

export default App;
