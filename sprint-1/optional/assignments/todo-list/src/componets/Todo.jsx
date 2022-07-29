import React from 'react'
import TodoList from './TodoList'
import TodoInput from './TodoInput'
import {v4 as uuid} from 'uuid';
import { useState } from 'react';
import styles from "./todo.module.css"

const Todo = () => {
  const [todos, setTodos] = useState("");
  const [newTodos, setNewTodos] = useState([]);

  const handleAdd = () =>{
    setNewTodos([...newTodos, { id: uuid(), value: todos }]);
    setTodos("");
}

const handleChange= (e) =>{
  setTodos(e.target.value);
}

const handleDelete = (id) =>{
  // console.log(id)
  let newTodo =newTodos.filter(todo => todo.id !== id);
  setNewTodos(newTodo);
}

//  console.log(newTodos)



  return (
    <div>
        <h2 className={styles.h2}>Todo App </h2>
        <TodoInput handleAdd={handleAdd} handleChange={handleChange} todos={todos}/>
        <TodoList todo={newTodos} handleDelete={handleDelete}/>
    </div>
  )
}

export default Todo