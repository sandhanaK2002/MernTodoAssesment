  import React, { useEffect, useState } from 'react';
  import { Header } from './components/Header';
  import {TodoList} from "./components/TodoList"
  import {fetchTodos , createTodo , updateTodo , deleteTodo} from "./utils/handleTodoApi"

  const App = () => {

      const [todo , setTodo] = useState([])
      const [text , setText] = useState("")
      const [isUpdating , setIsUpdating] = useState(false)
      const [todoId , setTodoId] = useState("")


      useEffect(()=>{
        fetchTodos(setTodo)
      },[])

      const updateMode =(_id , text)=>{
        setIsUpdating(true)
        setText(text)
        setTodoId(_id)
      }


    return (
      <div className="App">
        <div className="container">
              <Header/>

          
        <div className="top">
          <input
            type="text"
            placeholder="ADD TODO..."
            value={text}
            onChange = {(e)=> setText(e.target.value)}
          />

          <div className="add" 
          onClick={isUpdating ? 
            ()=>updateTodo(todoId , text, setTodo , setText ,  setIsUpdating) 
            : ()=>createTodo(text, setText, setTodo)} >
              {isUpdating ? "UPDATE" : "ADD"}
          </div>

        </div>

        <div className="list">
          {todo.map((item) => <TodoList 
          key={item._id} 
          text={item.text}
          updateMode = {() => updateMode(item._id, item.text)}
          deleteToDo = {() => deleteTodo(item._id, setTodo)} 
           />)}

      </div>

      </div>
    </div> 
    );
  };

  export default App;

