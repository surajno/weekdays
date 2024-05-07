import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  filterByJobRole:''
}

export const filterJobSlice = createSlice({
  name: 'filterJob',
  initialState,
  reducers: {
     setJobRole:(state,action)=>{
        state.filterByJobRole = action.payload;
     }
  },
})

export const { setJobRole } = filterJobSlice.actions  

export default filterJobSlice.reducer