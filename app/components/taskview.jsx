'use client'
import React, { useEffect, useState } from 'react'
import '../../styles/taskview.css'
import axios from 'axios'
import { useSelector } from 'react-redux'


function Taskview() {
  const [state,setState]=useState([])
  const data=useSelector((value)=>value)
  useEffect(()=>{
      setState(data.task.todovalue)
  },[data])
  console.log(state,'ff');
  console.log(data.task.todovalue,'haijdsj');
  // setState(data.task.todovalue)
  console.log(state,'hhh');
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/task_get').then((response)=>{
      console.log(response);
    }).catch((error)=>{
      console.log(error);
    })
  })
  return (
    <div className='taskbody'>
      {state.map((value,index)=>(
        <div key={index}>
           <li>{value.task}</li>
        <li>{value.status}</li>
        </div>
       
      ))}
     
    </div>
  )
}

export default Taskview