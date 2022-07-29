import React from 'react';
import styles from "./todo.module.css"


const TodoInput = ({handleAdd, handleChange, todos}) => {


  return (
    <div>
        <input 
            className={styles.addInput}
            value={todos}
            placeholder='Enter your text' 
            onChange={handleChange}/>
        <button className={styles.addBtn} onClick={handleAdd}>Add</button>
    </div>
  )
}

export default TodoInput