import { useState, useContext } from "react";
import { todosContex } from "../Context_Store/todos";
import { Timing } from "../Context_Store/todos";
import { FcPlus } from 'react-icons/fc';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const AddToDo = () => {
  const [todo, setTodo] = useState("");

  const { handleAddToDo } = useContext(todosContex)!;
  const notify = () => toast("➕  New task added !"
  ,{
    position: toast.POSITION.BOTTOM_CENTER,
    className: 'toast-message'
});

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
          
        />    <button onClick={notify}  type="submit"><FcPlus id="logosAdd" /></button>
 <ToastContainer  autoClose={1000}/>
  
      </form>
      </div>
    </div>
  );
};

export default AddToDo;
