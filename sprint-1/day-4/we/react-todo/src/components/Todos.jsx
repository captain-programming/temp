import React from 'react'
import {v4 as uuid } from "uuid"
import "../App.css";

const Todos = ({todo}) => {
  return (
    <div>
        {todo.map((todos)=>(
            <div key={uuid()} className="list">
                {todos}
            </div>
        ))}
    </div>
  )
}

export default Todos