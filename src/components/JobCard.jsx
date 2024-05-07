import { Button, Input } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { setFilteredJob } from "./../app/slice/weekDaysJob"

const JobCard = ({ jobDetails }) => {
  
  const [showFullDescription, setShowFullDescription] = useState(false);
  const { weekdayAllJobs, filteredJobs } = useSelector(state=>state.allJob)
  const { filterByJobRole } = useSelector(state=>state.filterJob)
  const dispatch = useDispatch()
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

   
  useEffect(()=>{
    
  if( filterByJobRole){
    const filteredJobList = weekdayAllJobs.filter((jobs)=>jobs.jobRole === filterByJobRole.toLowerCase())
    console.log("Filltered jobs",filteredJobList)
    dispatch(setFilteredJob(filteredJobList))
  }
  },[filterByJobRole])
  


  return (
    <>
      <div className="bg-zinc-100 p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {filteredJobs.map((job) => (
            <div className="bg-zinc-100 p-4 flex" key={job.jdUid}>
              <div className="bg-white shadow-md rounded-lg p-4">
                <div className="flex items-center space-x-6 mb-4">
                  <img
                    src={job.logoUrl}
                    className="rounded-lg w-11 h-16"
                    alt="JobLogo"
                  />
                  <div>
                    <p className="text-sm text-zinc-400 font-semibold">{job.companyName}</p>
                    <h2 className="text-lg ">{job.jobRole}</h2>
                    <p className="text-lg">{job.location}</p>
                  </div>
                </div>

                <p className="text-zinc-500 text-sm font-semibold mb-30">
                  Estimated Salary: <span>₹{job.maxJdSalary} - </span>
                  <span>{job.minJdSalary} LPA ✅</span>
                </p>

                 <div className="mt-3">
                  <h4 className="font-semibold font-bold mb-2">About Company:</h4>

                  <div className="">
                    {showFullDescription
                      ? job.jobDetailsFromCompany
                      : `${job.jobDetailsFromCompany.slice(0, 200)}...`} 
                     <button
                      className="text-blue-500"
                      onClick={toggleDescription}
                    >
                      {showFullDescription ? "Show Less" : "View More"}
                    </button> 
                   </div> 

                  
                  <button
                    className="text-blue-500"
                    onClick={() => {
                      window.open(job.jdLink, "_blank");
                    }}
                  >
                    View Job
                  </button>
                  
                </div> 
                

                <div className="mt-4">
                  {/* <p className="text-sm">Minimum Experience: 1 year</p> */}
                  <p>Min Experience: {job.minExp}</p>
                  {/* <Button variant="contained" color="success" >Easy Apply</Button> */}
                  <div className="mt-4 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
                    <button className="bg-green-500 text-white mr-18 px-2 py-2 rounded-lg">
                      Easy Apply
                    </button>
                    <button className="bg-blue-500 text-white px-8 py-3 rounded-lg">
                      Unlock referral ask
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default JobCard;
