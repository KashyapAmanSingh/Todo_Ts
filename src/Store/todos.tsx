import { ReactNode, createContext, useState} from "react";

export type TodosProviderProps = {
    children: ReactNode;
};

export type Todo = {
  id: string;
  task: string;
  completed: boolean;
  createAt: Date;
};

export type TodoContext = {
  todos: Todo[];
  handleAddToDo : (task: string) => void; //call signature
};

// eslint-disable-next-line react-refresh/only-export-components
export const todosContex = createContext<TodoContext | null >(null);         //it is a  store that have data 

export const TodoProvider = ({children}: TodosProviderProps) => {                        //When you use the TodoProvider component elsewhere in your application and provide the desired components or elements as children, those components or elements will be rendered in place of the {children} expression within the TodoProvider component.
  const [todos, setTodo] = useState<Todo[]>([]);

  const handleAddToDo = (task: string) => {
    setTodo((prev) => {
      const newTodos: Todo[]= [
        {
          id: Math.random().toString(),
          task: task,
          completed: false,
          createAt: new Date(),
        },
        ...prev,
      ];
      return newTodos;
    });
  };

  return ( 
  <todosContex.Provider value={{ todos, handleAddToDo }}>                                  {/* //  //provide the data from dstore named todosContext */}
  {children}                                               {/* child is any component that is wraped with the  TodoProvider fn that return todosContex.Provider value*/}
                                 {/* //In the context of React and JSX, the term "children" refers to the components or elements that are nested within a parent component.*/}

</todosContex.Provider>

  );
};

// Consumer

// eslint-disable-next-line react-refresh/only-export-components
// export const useTodo = () => {
//   const todosConsumer = useContext(todosContex);

//   if (!todosConsumer) {
//     //check wraped or not
//     throw new Error("useTodo used outside of Provider ");
//   }
//   return todosConsumer;
// };
