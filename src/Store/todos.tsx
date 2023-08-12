import { ReactNode, createContext, useState} from "react";
import { useSearchParams} from "react-router-dom";

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
  toggleToDoAsCompleted: (id: string) => void;
  handleDeleteTodo: (id: string) => void;
  handleDeleteAll: () => void;
};

// eslint-disable-next-line react-refresh/only-export-components
export const todosContex = createContext<TodoContext | null >(null);         //it is a  store that have data 

export const TodoProvider = ({children}: TodosProviderProps) => {                        //When you use the TodoProvider component elsewhere in your application and provide the desired components or elements as children, those components or elements will be rendered in place of the {children} expression within the TodoProvider component.
    const [todos, setTodo] = useState<Todo[]>([]);
    const [searchParams] = useSearchParams();
  
    let todosData = searchParams.get('todos');
    let filterData = todos;
  
    if (todosData === "active") {
      filterData = filterData.filter((task) => task.completed); // Filter out completed tasks
    } else if (todosData === "completed") {
      filterData = filterData.filter((task) => task.completed); // Filter out non-completed tasks
    }
 

  const handleAddToDo = (task: string) => {
    setTodo((prev) => {
      const newTodos: Todo[]= [
        {
          id: Math.random().toString(),
          task: task,
          completed: false,
          createAt: new Date(),
        },
        ...prev
      
      ];  console.log('The previous '+prev)
      return newTodos;
      
    //   console.log('The previous datas'+newTodos)
    });
    
  };



  //mark completed
const toggleToDoAsCompleted=(id:string) => {

    setTodo((prev)=>{
        let newTodos=prev.map((todo)=>{
            if(todo.id===id){
                return {...todo,completed:!todo.completed}
            }
            return todo;
        });
        return newTodos;
    })               
}


//delete
const handleDeleteTodo=(id:string) => {
    setTodo((prev) => {
        // Filter out todos whose id doesn't match the provided id
        const updatedTodos = prev.filter((todo) => todo.id !== id);
        return updatedTodos;
    });             
}


//delete all in one click 

const   handleDeleteAll=() => {
    setTodo([]);             
}


  return ( 
  <todosContex.Provider value={{ todos, handleAddToDo ,toggleToDoAsCompleted,handleDeleteTodo,handleDeleteAll}}>                                  {/* //  //provide the data from dstore named todosContext */}
  {children}                                               {/* child is any component that is wraped with the  TodoProvider fn that return todosContex.Provider value*/}
                                 {/* //In the context of React and JSX, the term "children" refers to the components or elements that are nested within a parent component.*/}

</todosContex.Provider>

  );
};
