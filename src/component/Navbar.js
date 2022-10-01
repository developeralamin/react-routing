import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <NavLink to="/" end className="nav-link">
          Home
        </NavLink>

        <NavLink to="/blogs" className="nav-link">
          Blog
        </NavLink>

        <NavLink to="/contact" className="nav-link">
          Contact
        </NavLink>
        <NavLink to="/user" className="nav-link">
          User
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
