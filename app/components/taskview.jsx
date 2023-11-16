'use client'
import React, { useEffect } from 'react'
import '../../styles/taskview.css'
import axios from 'axios'
import { useSelector } from 'react-redux'


function Taskview() {
  const data=useSelector((value)=>value.todovalue)
  console.log(data,'haijdsj');
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/task_get').then((response)=>{
      console.log(response);
    }).catch((error)=>{
      console.log(error);
    })
  })
  return (
    <div className='taskbody'>
     
    </div>
  )
}

export default Taskview