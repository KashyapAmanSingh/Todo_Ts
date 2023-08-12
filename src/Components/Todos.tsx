import {useContext} from 'react'

import { todosContex } from '../Store/todos';




const Todos = () => {

    const {todos,toggleToDoAsCompleted, handleDeleteTodo,handleDeleteAll} = useContext(todosContex)!; // Use the useContext hook to access the context
 

    let filerData=todos;
  return (
    <div>
        
      {
        filerData.map((todo )=>{
    return <li key={todo.id}>
               <input type="checkbox" id={todo.id} checked={todo.completed} onChange={()=>toggleToDoAsCompleted(todo.id)}/>    
               <label htmlFor=""> {todo.task}  </label>


               {

       todo.completed && (
        <button type='button' onClick={()=>handleDeleteTodo(todo.id)}>Delete</button>
        
       )

               }
    </li>
        })
      }
        <button type='button' onClick={()=>handleDeleteAll()}>Delete All</button>

{
    
}
    </div>
  )
}

export default Todos