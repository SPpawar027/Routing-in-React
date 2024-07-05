import React from "react";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className=" flex justify-center py-5 gap-10">
      <NavLink
        style={(e) => {
          return {
            color: e.isActive ? "tomato" : "",
            fontWeight: e.isActive ? "500" : "",
            transform: e.isActive ? "scale(1.5)" : "scale(1)",
            transition: "transform 0.4s ease",
          };
        }}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={(e) => {
          return [
            e.isActive ? "text-orange-600" : " ",
            e.isActive ? "font-semibold" : " ",
            e.isActive ? "scale-150" : " ",
            e.isActive ? "duration-100" : " ",
          ].join(" ");
        }}
        to="/About"
      >
        About
      </NavLink>
      <NavLink to="/contact">
        {(e) => {
          return (
            <span
              className={[
                e.isActive ? "scale-150" : " ",
                e.isActive ? "font-semibold" : " ",
                e.isActive ? "duration-100" : " ",
                e.isActive ? "text-orange-600" : " ",
              ].join(" ")}
            >
              Contact
            </span>
          );
        }}
      </NavLink>
    </nav>
  );
};
