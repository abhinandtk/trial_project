'use client'
import React, { useState } from 'react'
import '../../styles/page.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function page() {
    const [state,setState]=useState()
    const inputChange=(e)=>{
        const {name,value}=e.target
        setState({...state,[name]:value})
        console.log(state);
    }
    const submit=()=>{
        axios.post('http://127.0.0.1:8000/Userlogin',state).then((res)=>{
            console.log(res);
            toast.success(res.data)

        }).catch((error)=>{
            console.log(error);
        })
    }
  return (
    <div className='w-fit mx-auto p-4 bg-slate-200 mt-4 rounded-md'>
        <ToastContainer></ToastContainer>
    <div className=' d-flex justify-center'>
         <div class=" grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-6">
          <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Username</label>
          <div class="mt-2">
            <input onChange={inputChange} type="text" name="username" id="first-name" autocomplete="given-name" class="block w-full rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-2 border-black"></input>
          </div>
        </div>
        <div class="sm:col-span-6">
          <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
          <div class="mt-2">
            <input onChange={inputChange} type="text" name="password" id="first-name" autocomplete="given-name" class="block w-full rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-2 border-black   "></input>
          </div>
        </div>
       
      </div>
   
    </div>
    <button onClick={submit}  className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4  ">
    Login
  </button>
    </div>

  )
}

export default page