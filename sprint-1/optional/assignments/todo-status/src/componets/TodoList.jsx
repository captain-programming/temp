import React from 'react'
import TodoItem from './TodoItem'

const TodoList = (props) => {
  // console.log(props)
  return (
    <div>
      <TodoItem todolist={props.todo}/>
    </div>
  )
}

export default TodoList