import React from "react";
import { NavLink } from "react-router-dom";

const Nav = props => {
  return (
    <div className="nav">
      <NavLink to="/home/hot">正在热映</NavLink>
      <NavLink to="/home/comming">即将上映</NavLink>
    </div>
  );
};

export default Nav;
