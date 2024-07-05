import React from "react";
import { NavLink } from 'react-router-dom';

import { Nav } from "./components/Nav";
import { Routing } from "./utils/Routing";
function App (){

  return (
    <div className=" bg-zinc-200 px-10 w-full h-screen">

      <Nav/>
      <Routing/>

    </div>



  )
}
export default App;