import { configureStore } from '@reduxjs/toolkit'
import allJobReducer from "./slice/weekDaysJob"
import filterJobReducer from "./slice/filterSlice"
export const store = configureStore({
  reducer: {
    filterJob:filterJobReducer,
    allJob:allJobReducer
  },
})