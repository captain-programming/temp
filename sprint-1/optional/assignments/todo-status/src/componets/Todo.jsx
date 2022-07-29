import React, { useState } from 'react'
import TodoList from './TodoList'
import {v4 as uuid} from "uuid"
import "../App.css"

const Todo = () => {

    const [text, setText] = useState("");
    const [todo, setTodo] = useState([])
    

    const handleChange=(e)=>{
        setText(e.target.value);
    }

    const handleAdd=(e)=>{
        setTodo([...todo, {id: uuid(), value: text, checked: false}])
    }
    // console.log(todo);
  return (
    <div className='main'>
      <div>
        <input className="input" placeholder='Enter your task' value={text} onChange={handleChange}/>
        <button className='btn' onClick={handleAdd}>+</button>
      </div>
      <div>
        <TodoList todo={todo}/>
      </div>
    </div>
  )
}

export default Todo