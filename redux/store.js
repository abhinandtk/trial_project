import {configureStore} from '@reduxjs/toolkit'
import taskreducer from "./task.js"

export const store=configureStore({
    reducer:{
      task:taskreducer
    }
})