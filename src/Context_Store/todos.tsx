import { ReactNode, createContext, useState } from "react";

export type TodosProviderProps = {
  children: ReactNode;
};
export type Timing = {
  hours: number;
  minutes: number;
  seconds: number;
};

export type Todo = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Timing;
};

export type TodoContext = {
  todos: Todo[];
  handleAddToDo: (task: string, time: Timing) => void; //call signature
  toggleToDoAsCompleted: (id: string) => void;
  handleDeleteTodo: (id: string) => void;
  handleDeleteAll: () => void;
};

// eslint-disable-next-line react-refresh/only-export-components
export const todosContex = createContext<TodoContext | null>(null); //it is a  store that have data

export const TodoProvider = ({ children }: TodosProviderProps) => {
  //When you use the TodoProvider component elsewhere in your application and provide the desired components or elements as children, those components or elements will be rendered in place of the {children} expression within the TodoProvider component.
  const [todos, setTodo] = useState<Todo[]>(() => {
    try {
      const newTodos = localStorage.getItem("todos") || "[]";
      return JSON.parse(newTodos) as Todo[];
    } catch (error) {
      return [];
    }
  });

  const handleAddToDo = (task: string, time: Timing) => {
    setTodo((prev) => {
      const newTodos: Todo[] = [
        {
          id: Math.random().toString(),
          task: task,
          completed: false,
          createdAt: time,
        },
        ...prev,
      ];

      localStorage.setItem("todos", JSON.stringify(newTodos));
      console.log("The previous " + prev);
      return newTodos;
    });
  };

  //mark completed
  const toggleToDoAsCompleted = (id: string) => {
    setTodo((prev) => {
      const  newTodos = prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  };

  //delete
  const handleDeleteTodo = (id: string) => {
    setTodo((prev) => {
      // Filter out todos whose id doesn't match the provided id
      const newTodos = prev.filter((todo) => todo.id !== id);
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  };

  //delete all in one click
  const handleDeleteAll = () => {
    setTodo([]);
    localStorage.clear();
  };

  
  return (
    <>
      <todosContex.Provider
        value={{
          todos,
          handleAddToDo,
          toggleToDoAsCompleted,
          handleDeleteTodo,
          handleDeleteAll,
        }}
      >
        {" "}
        {children}{" "}
        {/* //In the context of React and JSX, the term "children" refers to the components or elements that are nested within a parent component.*/}
      </todosContex.Provider>
    </>
  );
};
