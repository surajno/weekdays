import React, { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { setJobRole } from '../app/slice/filterSlice';
import { JOB_FILTER_OPTIONS } from './../utils'

const Filters = () => {
    const dispatch = useDispatch()
    const setJobRoleFilter = (event)=>{
    dispatch(setJobRole(event.target.value))
    }




  return (
    <div>
        <div class="flex justify-center gap-2 p-4">
    <div class="flex flex-col">
        <select onChange={setJobRoleFilter} class="border border-zinc-300 rounded-lg p-2 text-zinc-700 focus:ring-blue-500 focus:border-blue-500">
            <option>Roles</option>
           { JOB_FILTER_OPTIONS.map((opt)=>
           <option 
            key={opt.id}
           >
             {opt.role}
            </option>)
           }
        </select>
    </div>
    <div class="flex flex-col">
        <select class="border border-zinc-300 rounded-lg p-2 text-zinc-700 focus:ring-blue-500 focus:border-blue-500">
            <option>Number Of Employees</option>
            <option>1-10</option>
            <option>11-20</option>
            <option>21-50</option>
            <option>51-100</option>
            <option>101-200</option>
            <option>201-500</option>
            <option>500+</option>
        </select>
    </div>
    <div class="flex flex-col">
        <select class="border border-zinc-300 rounded-lg p-2 text-zinc-700 focus:ring-blue-500 focus:border-blue-500">
            <option>Experience</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
        </select>
    </div>
    <div class="flex flex-col">
        <select class="border border-zinc-300 rounded-lg p-2 text-zinc-700 focus:ring-blue-500 focus:border-blue-500">
            <option>Remote</option>
            <option>Hybrid</option>
            <option>In-office</option>
        </select>
    </div>
    <div class="flex flex-col">
        <select class="border border-zinc-300 rounded-lg p-2 text-zinc-700 focus:ring-blue-500 focus:border-blue-500">
            <option>Minimum Base Pay Salary</option>
            <option>10L</option>
            <option>20L</option>
            <option>30L</option>
            <option>40L</option>
            <option>50L</option>
        </select>
    </div>
    <div class="flex flex-col">
        <input type="text" placeholder="Search Company Name" class="border border-zinc-300 rounded-lg p-2 text-zinc-700 focus:ring-blue-500 focus:border-blue-500" />
    </div>
</div>
    </div>
  )
};

export default Filters