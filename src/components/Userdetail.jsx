import React from "react";
import { useNavigate, useParams } from "react-router-dom";


export const Userdetail = () => {
  const { name } = useParams();
  const navigate=useNavigate();
    const Handlebtn = (()=>{
            navigate(-1);

    })
  return (
    <div className="w-[500px] mt-10 mx-auto">
      <h1 className="text-3xl font-semibold ">hello ! {name}</h1>

      <button
        onClick={Handlebtn}
      className="px-10 font-semibold py-3 w-fit bg-sky-400 mt-6">
       
        Go Back
      </button>
    </div>
  );
};
