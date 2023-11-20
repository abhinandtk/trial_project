'use client'
import React, { useEffect, useState } from "react";
import "./../../styles/page.css";
import axios from "axios";  
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../styles/page.css'






function page() {
  const [state,setState]=useState()
  const inputChange=(event)=>{
    const {name,value}=event.target
    setState({...state,[name]:value})
  }
  useEffect(()=>{
    console.log(state);
  },[state])
  const submit=()=>{
    axios.post('http://127.0.0.1:8000/UserRegister',state).then((res)=>{
      console.log(res);
      toast.success(res.data)
    }).catch((error)=>{
      toast.error(error)
      console.log(error);
    })
  }
  return (
    <>
    <ToastContainer></ToastContainer>
      <div className="mx-auto d-flex justify-center">
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-8">
          <div class="sm:col-span-4">
            <label
              for="first-name"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
            First Name
            </label>
            <div class="mt-2">
              <input
              onChange={inputChange}
                type="text"
                name="first_name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-2 border-black"
              />
            </div>
          </div>

          <div class="sm:col-span-4">
            <label
              for="email"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Last Name
            </label>
            <div class="mt-2">
              <input
              onChange={inputChange}
                type="text"
                name="last_name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-2 border-black"
              />
            </div>
          </div>

          <div class="sm:col-span-4">
            <label
              for="email"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Username
            </label>
            <div class="mt-2">
              <input
              onChange={inputChange}
              type="text"
                name="username"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-2 border-black"
              />
            </div>
          </div>
          <div class="sm:col-span-4 ">
            <label
              for="email"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Email
            </label>
            <div class="mt-2">
              <input
              onChange={inputChange}
              type="text"
                name="email"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-2 border-black"
              />
            </div>
          </div>
          <div class="sm:col-span-4 ">
            <label
              for="email"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div class="mt-2">
              <input
              onChange={inputChange}
              type="text"
                name="password"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 border-2 border-black"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
  <button onClick={submit} className="bg-blue-500 text-white px-4 py-2 rounded-md">
    Register
  </button>
</div>
    </>
  );
}

export default page;
