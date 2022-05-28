import React from 'react'
import { useState } from 'react'
// import Todoitems from './Todoitems'
import Todo from './Todo'

function Todolist() {
  const[list,setlist]=useState([]);

 let handleclick=(value)=>{
    setlist([...list,value])
  }
  return (
    <div>
       <Todo handleclick={handleclick}/>
       {list.map((to)=>{
         return (
           <>
           <h3>{to}</h3>
           </>
         )
       })}
    </div>
  )
}

export default Todolist