import React from "react";
import { Outlet } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <h1></h1>
      <Outlet />
    </div>
  );
}

export default Navbar;
