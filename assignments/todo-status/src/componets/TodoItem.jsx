import React from 'react'
import { useState } from 'react'
import "../App.css"

const TodoItem = ({todolist}) => {
  // const [check, setCheck] = useState(false);
  const [inCompleted, setInCompletd] = useState([]);
  console.log(inCompleted)
  return (
    <div>
      {todolist.map((list)=>(
        <div className='list' key={list.id}>
          <div>{list.value}</div>
          <input 
            type="checkbox" 
            className="checkbox" 
            onChange={(e)=> {
              setInCompletd([...inCompleted, {id: list.id, value: list.value, checked: e.target.checked}])
            }}
          />
        </div>
      ))}
    </div>
  )
}

export default TodoItem