import { ReactNode, createContext, useState } from "react";

export type TodosProviderProps = {
  children: ReactNode;
};

export type Todo = {
  id: string;
  task: string;
  completed: boolean;

};



    // console.log("This is filtered datas " + `${hours}:${minutes}:${sec}` );
        
    export type Timing = {
      hours: number,
      minutes: number,
      seconds: number
    }


   
export type TodoContext = {
  todos: Todo[];
  timing: Timing; // Include the timing object
  handleAddToDo: (task: string) => void; //call signature
  toggleToDoAsCompleted: (id: string) => void;
  handleDeleteTodo: (id: string) => void;
  handleDeleteAll: () => void;
};



// eslint-disable-next-line react-refresh/only-export-components
export const todosContex = createContext<TodoContext | null>(null); //it is a  store that have data


export const TodoProvider = ({ children }: TodosProviderProps) => {
  const timing: Timing = {
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds()
  };
  //When you use the TodoProvider component elsewhere in your application and provide the desired components or elements as children, those components or elements will be rendered in place of the {children} expression within the TodoProvider component.
  const [todos, setTodo] = useState<Todo[]>(()=>{
    try {
        const newTodos = localStorage.getItem('todos') ||"[]";
        return JSON.parse(newTodos) as Todo[];
    } catch (error) {
        return []
    }
  });

 
  const handleAddToDo = (task: string) => {
    setTodo((prev) => {
      const newTodos: Todo[] = [
        {
          id: Math.random().toString(),
          task: task,
          completed: false
 
        },
        ...prev,
      ];


      localStorage.setItem('todos', JSON.stringify(newTodos));
      console.log("The previous " + prev);
      return newTodos;

      //   console.log('The previous datas'+newTodos)
    });
  };

  //mark completed
  const toggleToDoAsCompleted = (id: string) => {
    setTodo((prev) => {
      let newTodos= prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      localStorage.setItem('todos', JSON.stringify(newTodos));
      return newTodos;
    });
  };


  
  //delete
  const handleDeleteTodo = (id: string) => {
    setTodo((prev) => {
      // Filter out todos whose id doesn't match the provided id
      const newTodos = prev.filter((todo) => todo.id !== id);
      localStorage.setItem('todos', JSON.stringify(newTodos));
      return newTodos;
    });
  };

  //delete all in one click

  const handleDeleteAll = () => {
    setTodo([]);
  };

  return (
    <todosContex.Provider
      value={{
        todos,
        timing,
        handleAddToDo,
        toggleToDoAsCompleted,
        handleDeleteTodo,
        handleDeleteAll,
      }}
    >
      {" "}
      {/* //  //provide the data from dstore named todosContext */}
      {children}{" "}
      {/* child is any component that is wraped with the  TodoProvider fn that return todosContex.Provider value*/}
      {/* //In the context of React and JSX, the term "children" refers to the components or elements that are nested within a parent component.*/}
    </todosContex.Provider>
  );
};
