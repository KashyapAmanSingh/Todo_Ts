import { useState, useContext } from "react";

import { todosContex } from "../Store/todos";

const AddToDo = () => {
  const [todo, setTodo] = useState("");

  const { handleAddToDo } = useContext(todosContex)!; // Use the useContext hook to access the context
  //By using the ! operator, you're telling TypeScript to treat the value as non-null, allowing you to safely destructure the context properties without TypeScript raising an error.

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo !== "") {
      handleAddToDo(todo);
      setTodo("");
    }
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          placeholder="write yout Todo..."
          type="text"
          name=""
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
};

export default AddToDo;
