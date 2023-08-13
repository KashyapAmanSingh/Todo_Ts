import { useContext } from "react";
import { useSearchParams} from "react-router-dom";

import { todosContex } from "../Store/todos";

const Todos = () => {
  const { todos,timing, toggleToDoAsCompleted, handleDeleteTodo, handleDeleteAll } = useContext(todosContex)!; // Use the useContext hook to access the context
  const [searchParams] = useSearchParams();
  
  let filterData = todos;
    const todosData = searchParams.get('todos');

   // // console.log("This is filtered datas Hours" + filterData.map((value) => new Date(value.createAt)));



   const{hours,minutes,seconds} =timing;

   console.log("This is filtered datas " + `${hours}:${minutes}:${seconds}` );
        


  if (todosData === "active") {
      filterData = filterData.filter((task) => !task.completed); // Filter out completed tasks
  } else if (todosData === "completed") {
      filterData = filterData.filter((task) => task.completed); // Filter out non-completed tasks
  }

  return (
    <div id="work">
      {filterData.map((todo) => {
        return (
          <li key={todo.id}>
            <input
              type="checkbox"
              id={todo.id}
              checked={todo.completed}
              onChange={() => toggleToDoAsCompleted(todo.id)}
            />
            <label htmlFor=""> {todo.task} </label>

            {todo.completed && (
              <button type="button"  onClick={() => handleDeleteTodo(todo.id)}>
                Delete
              </button>
            )}
          </li>
        );
      })}
      <button type="button" id="btn" onClick={() => handleDeleteAll()}>
        Delete All
      </button>

     
    </div>
  );
};

export default Todos;
