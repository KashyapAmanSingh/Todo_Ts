import { Link, useSearchParams } from "react-router-dom";

const Navbar = () => {
  const [searchParams] = useSearchParams();

  const todosData = searchParams.get("todos");

  return (
    <nav>
      <Link to="/" className={todosData === null ? "active" : ""}>
        Add Task
      </Link>
      <Link
        to="/?todos=active"
        className={todosData === "active" ? "active" : ""}
      >
        Active Task
      </Link>
      <Link
        to="/?todos=completed"
        className={todosData === "completed" ? "active" : ""}
      >
       Executed 
      </Link>
    </nav>
  );
};

export default Navbar;
