import React from 'react'
import {useState} from  "react"
import Todolist from "./Todolist"

const Todo = () => {
    const [todo,settodo]=useState("")
    const[value,setvalue]=useState([])

    let handlechange=(todo)=>{
        setvalue([...value,todo])
    }
    
  return (
    <div>
        <Todolist todo={value}/>
        <input onChange={(e)=>settodo(e.target.value)}/>
        <button onClick={()=>handlechange(todo)}>Add</button>
    </div>
  )
}

export default Todo