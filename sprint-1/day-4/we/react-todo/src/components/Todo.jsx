import React from 'react'
import { useState } from 'react'
import Todos from './Todos';
import "../App.css";

const Todo = () => {
    const [text, setText] = useState("");
    const [todo, setTodo] = useState([]);

    const handleAdd =()=>{
        setTodo([...todo, text])
    }

    const handleChange =(e)=>{
        setText(e.target.value)
    }

    console.log(todo);
  return (
    <div>
        <input type="text" placeholder='Enter task' onChange={handleChange} className="input"/>
        <button onClick={handleAdd} className="btn">ADD</button>
        <Todos todo={todo}/>
    </div>
  )
}

export default Todo