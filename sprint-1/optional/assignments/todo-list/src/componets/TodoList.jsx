import React from 'react';
import TodoCompleted from './TodoCompleted';
import styles from './todo.module.css';
import { useState } from 'react';

const TodoList = ({todo, handleDelete}) => {
  
  const [isTrue, setIsTrue] = useState(false);
  const [completed, setCompleted] = useState([]);

  const handleChange = (e)=>{
    setIsTrue(e.target.checked);
    console.log(isTrue);
  }

  return (
    <div>
      <div className={styles.list}>
          {todo.map((todo)=>(
            <div key={todo.id} className={styles.listDiv}>
              <input 
                type="checkbox"
                className={styles.checkInput}
                onChange={handleChange}
              />
              <div>
                {todo.value}
              </div>
              {/* <button onClick={()=> handleDelete(todo.id)}>&#215;</button> */}
            </div>
          ))}
      </div>
        <TodoCompleted />
    </div>
  )
}

export default TodoList