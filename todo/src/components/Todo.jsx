import React from 'react'
import { useState } from 'react'
// import Todoitems from './Todoitems'
import Todolist from './Todolist';

function Todo ({handleclick}) {
  const [todo, settodo]=useState("");
  // const [input,setinput]=useState(null)
  // function
 console.log(todo)
  return (
    <div>
      <h1>Todo App</h1>
        <input type="text" placeholder='Enter todos' onChange={(e)=>settodo(e.target.value)}
         ></input>
        <button onClick={()=>{handleclick(Todo)}}>Add</button>
        <Todolist/>
    </div>
  )
}

export default Todo