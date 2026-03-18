import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav role="navigation">
      <NavLink to="/" end>
        Home
      </NavLink>{" "}
      |{" "}
      <NavLink to="/about" end>
        About
      </NavLink>{" "}
      |{" "}
      <NavLink to="/directors" end>
        Directors
      </NavLink>
    </nav>
  );
}
