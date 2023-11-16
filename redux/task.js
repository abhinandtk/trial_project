import { createSlice } from "@reduxjs/toolkit";
 
const Task=createSlice({
   name:'taskmethod',
   initialState:{
     todovalue:[]
   },
   reducers:{
    updateState:(state,action)=>{
        console.log(action);
       state.todovalue=action.payload
    }
   }
    
})
export const {updateState} =Task.actions
export default Task.reducer