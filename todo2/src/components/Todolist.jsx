import React from 'react'
import Todoitem from "./Todoitem"

const Todolist = ({todo}) => {
  return (
    <div>
       { todo.map((item)=>{
            return (
                // <Todoitem item={item}/>
                <h1>{item}</h1>
            )
            
            })}
    </div>
  )
}

export default Todolist