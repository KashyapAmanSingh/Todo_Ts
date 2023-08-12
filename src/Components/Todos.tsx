import { useContext } from "react";
import { useSearchParams} from "react-router-dom";

import { todosContex } from "../Store/todos";

const Todos = () => {
  const { todos, toggleToDoAsCompleted, handleDeleteTodo, handleDeleteAll } = useContext(todosContex)!; // Use the useContext hook to access the context
  const [searchParams] = useSearchParams();
  
  let filterData = todos;
    const todosData = searchParams.get('todos');


  if (todosData === "active") {
      filterData = filterData.filter((task) => !task.completed); // Filter out completed tasks
  } else if (todosData === "completed") {
      filterData = filterData.filter((task) => task.completed); // Filter out non-completed tasks
  }

  return (
    <div>
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
              <button type="button" onClick={() => handleDeleteTodo(todo.id)}>
                Delete
              </button>
            )}
          </li>
        );
      })}
      <button type="button" onClick={() => handleDeleteAll()}>
        Delete All
      </button>

      {}
    </div>
  );
};

export default Todos;
