import React from "react";
import { Home } from "../components/Home";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Routes, Route } from "react-router-dom";

import { User1 } from "../components/User1";
import { Userdetail } from "../components/Userdetail";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        {" "}
      </Route>
      <Route path="/About" element={<About />}>
        {" "}
      </Route>
      <Route path="/Contact" element={<Contact />}>
        {" "}
      </Route>
      <Route path="/User1" element={<User1 />}>
      
      <Route path="/User1/:name" element={<Userdetail />}/>
      </Route>
     
     
    </Routes>
  );
};
