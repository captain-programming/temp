import React from 'react'
import { useState } from 'react'

const InputBox = () => {
    const [text, setText] = useState("");

    const handleChange= (e) =>{
        setText(e.target.value)
    }

    console.log(text)
  return (
    <div>
        <input type="text" value={text}placeholder='Enter Text' onChange={handleChange}/>
        <button onClick={()=>setText("")}>CLEAR</button>
        <h2>{text}</h2>
    </div>
  )
}

export default InputBox