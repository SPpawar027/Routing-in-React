import React from "react";
import { Link, Outlet } from "react-router-dom";
export const User1 = () => {
  return (
    <div className="w-[500px] mt-5 mx-auto">
      <h1 className="text-4xl font-bold  ">User</h1>
      <div className="flex flex-col mt-7 gap-4">
        <Link
          className="bg-cyan-300 w-40 text-center font-semibold text-lg px-8 py-3 rounded-full"
          to="/User1/Sagar"
        >
       
          Sagar
        </Link>
        <Link
          className="bg-cyan-300 w-40 text-center font-semibold text-lg px-8 py-3 rounded-full"
          to="/User1/Tushar"
        >
       
          Tushar
        </Link>
        <Link
          className="bg-cyan-300 w-40 text-center font-semibold text-lg px-8 py-3 rounded-full"
          to="/User1/Himanshu "
        >
       
          Himanshu
        </Link>
        {/* <button className="px-10 font-semibold py-3 w-fit bg-sky-400 mt-6"> Go Back </button> */}
        
      </div>
        <hr className="bg-black w-full h-0.5 mt-10"/>
      <Outlet/>
    </div>
  );
};
