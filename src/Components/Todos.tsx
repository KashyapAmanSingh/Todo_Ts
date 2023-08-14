import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { todosContex } from "../Context_Store/todos";
import { Timing } from "../Context_Store/todos";
import { FcFullTrash ,FcClock} from "react-icons/fc";
import { AiOutlineStar } from "react-icons/ai";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Todos = () => {
  const notify = () =>
    toast("❌ Deleted All Tasks !", {
      className: "toast-message",
    });
  const stared = () =>
    toast("⭐ High Priority Task !", {
      className: "toast-message",
    });

  const { todos, toggleToDoAsCompleted, handleDeleteTodo, handleDeleteAll } =
    useContext(todosContex)!; // Use the useContext hook to access the context
  const [searchParams] = useSearchParams();
  const [timeArray, setTimeArray] = useState<Timing[]>([]);
  // const [starClicked, setStarClicked] = useState(false);

  useEffect(() => {
    const updatedTimes = todos.map((value) => value.createdAt);
    setTimeArray(updatedTimes);
  }, [todos]);

  let filterData = todos;
  const todosData = searchParams.get("todos");

  if (todosData === "active") {
    filterData = filterData.filter((task) => !task.completed); // Filter out completed tasks
  } else if (todosData === "completed") {
    filterData = filterData.filter((task) => task.completed); // Filter out non-completed tasks
  }

  const handleStarClick = (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>
  ): void => {
    event.currentTarget.classList.toggle("toggle");
  };

  return (
    <>
      <div id="work">
        {filterData.map((todo) => {
          const timeIndex = filterData.findIndex((item) => item.id === todo.id);
          const time = timeArray[timeIndex];

          return (
            <li key={todo.id}>
              <input
                type="checkbox"
                id={todo.id}
                checked={todo.completed}
                onChange={() => toggleToDoAsCompleted(todo.id)}
              />
              <label id="lbl" htmlFor="">
                {" "}
                {todo.task}{" "}
              </label>

              {timeArray.length > 0 && (
                <div>
                  {time && (
                    <div>
                      <p id="Create_time">
                       <FcClock/> {time.hours} : {time.minutes} : {time.seconds}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {todo.completed ? (
                <div onClick={notify}>
                  <FcFullTrash
                    id="logos"
                    onClick={() => handleDeleteTodo(todo.id)}
                  />
                </div>
              ) : (
                <div onClick={stared}>
                  <AiOutlineStar onClick={handleStarClick} />
                </div>
              )}
            </li>
          );
        })}
      </div>

      <button type="button" id="btn" onClick={() => handleDeleteAll()}>
        <p onClick={notify}>Delete All</p>
      </button>
      <ToastContainer position="bottom-center" autoClose={1000} />
    </>
  );
};

export default Todos;
