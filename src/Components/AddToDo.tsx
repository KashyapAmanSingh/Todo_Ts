import { useState, useContext } from "react";
import { todosContex } from "../Context_Store/todos";
import { Timing } from "../Context_Store/todos";
import { FcPlus } from 'react-icons/fc';


const AddToDo = () => {
  const [todo, setTodo] = useState("");

  const { handleAddToDo } = useContext(todosContex)!;

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const timing: Timing = {
      hours: new Date().getHours(),
      minutes: new Date().getMinutes(),
      seconds: new Date().getSeconds(),
    };

    // handleTime();
    if (todo !== "") {
      handleAddToDo(todo, timing);

      setTodo("");
    }
  };
  return (
    <div >
      <div >
      <form onSubmit={handleFormSubmit}>

         
        <input
          placeholder="write your Task To Do..."
          type="text"
          name=""
          className="form-control"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          
        />    <button  className="btn btn-outline-primary" type="submit"><FcPlus id="logosAdd" /></button>

  
      </form>
      </div>
    </div>
  );
};

export default AddToDo;
