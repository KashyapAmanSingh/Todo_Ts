import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { TodoProvider } from './Store/todos.tsx'
import { BrowserRouter} from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')! as HTMLElement).render(
 
 
 <React.StrictMode>
   <BrowserRouter > 
    <TodoProvider  > 
      <App />                   {/*       //children param of the TodoProvider ,,In this example, the App component is being passed as a child to the TodoProvider. This means that the App component and any components nested within it will have access to the values provided by the todosContext.Provider. */}
    </TodoProvider>
    </BrowserRouter > 
  </React.StrictMode>
);
