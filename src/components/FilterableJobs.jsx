import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";
import { useDispatch } from "react-redux";
import { setAllJobs } from "./../app/slice/weekDaysJob"

const ApiCalls = () => {
  const [jobDetails, setJobDetails] = useState([]);
  const [offset, setOffset] = useState(0);
  const dispatch = useDispatch()



  useEffect(() => {
    const fetchData = async () => {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const body = JSON.stringify({
        "limit": 25,
        "offset": 3
      });

      const config = {
        method: "POST",
        headers: myHeaders,
        body
      };
      try {
        const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", config);
        const result = await response.json();
        dispatch(setAllJobs(result.jdList))
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [offset]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    setOffset((prevOffset) => prevOffset + 10);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
        <JobCard />
    </div>
  );
};

export default ApiCalls;
