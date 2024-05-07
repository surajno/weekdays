import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  weekdayAllJobs:[],
  filteredJobs:[]
}

export const allJobSlice = createSlice({
  name: 'allJob',
  initialState,
  reducers: {
     setAllJobs:(state,action)=>{
        state.weekdayAllJobs = action.payload;
        state.filteredJobs = action.payload;
     },
     setFilteredJob:(state,action)=>{
        state.filteredJobs = action.payload;
     }

  },
})

export const { setAllJobs, setFilteredJob } = allJobSlice.actions  

export default allJobSlice.reducer